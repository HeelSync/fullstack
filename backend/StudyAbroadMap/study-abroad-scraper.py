from selenium import webdriver
from bs4 import BeautifulSoup
import random
import math
import time
import numpy as np
import pandas as pd
import json


class University:
    def __init__(self, identifier, name, image_url, location, overview, student_experience):
        self.identifier = identifier
        self.name = name
        self.image_url = image_url
        self.location = location
        self.overview = overview
        self.student_experience = student_experience

    
    def to_string(self):
        return self.name + " at " + self.location.city + ", " + self.location.country + " with ID " + str(self.identifier)
    

    def to_json(self):
        location_json = self.location.to_json()

        result = "{ \"id\": \"" + str(self.identifier) +  "\", \"name\": \"" + self.name + "\", \"image\": \"" + self.image_url + "\", \"overview\": \"" + self.overview.replace("\n", "\\n").replace("\t", "").replace("\"", "\\\"") + "\", \"location\": " + location_json + ", \"student_experience\": \"" + self.student_experience.replace("\n", "\\n").replace("\t", "").replace("\"", "\\\"") + "\"},\n"

        return result


class Location:
    def __init__(self, city, country, description, coordinates):
        self.city = city
        self.country = country
        self.description = description
        self.coordinates = coordinates

    
    def to_json(self):
        return json.dumps(self.__dict__)


def get_university_objects(ids):
    unis = []

    for i in ids:
        driver = webdriver.Chrome()

        url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=" + str(i)
        driver.get(url)

        time.sleep(10)

        try:
            soup = BeautifulSoup(driver.page_source, 'html.parser')
        except:
            continue

        # get name of the university
        name = soup.find_all('h2')
        if len(name) == 0:
            continue

        name = name[0]

        image_url = soup.findAll('img')[1].get('src')

        # get first table containing overview, location, etc.
        table = soup.findAll('table')
        if len(table) == 0:
            update_bad_file("Not a table ", i)

            continue

        table = table[0]
        rows = table.find_all('tr')

        overview_found = False
        location_found = False
        experience_found = False

        overview = ""
        location = None
        student_experience = ""
        done = False
        for row in rows:
            if done:
                break

            cells = row.find_all('td')
            for cell in cells:
                text = cell.text.strip()

                if text == "Overview":
                    overview_found = True
                elif overview_found and text != "":
                    overview = text
                    overview_found = False

                if text == "Location":
                    location_found = True
                elif location_found and text != "":
                    text = text.split("\n")
                    place = text[0].split(", ")
                    city = place[0].strip()
                    if len(place) > 1:
                        country = place[1].strip()
                    else:
                        update_bad_file("From bad place",i )

                        done = True

                        break

                    coordinates = getCoords(city, country, i)

                    if len(text) > 1:
                        location = Location(city, country, text[1], coordinates)
                    elif len(text) == 1:
                        location = Location(city, country, "", coordinates)
                    else:
                        update_bad_file("From location check", i)

                        done = True

                        break

                    location_found = False

                if text == "Student Experience":
                    experience_found = True
                elif experience_found and text != "":
                    student_experience = text
                    experience_found = False
        
        if overview == "" or location == None or coordinates == [0, 0]:
            update_bad_file("From last check", i)

            continue

        university = University(str(i), name.text, image_url, location, overview, student_experience)

        unis.append(University(str(i), name.text, image_url, location, overview, student_experience))
        file = open("directjson.txt", "a")
        file.write(university.to_json())
        file.close()

        time.sleep(1)
        driver.quit()

    return unis


def reformat(oldName):
    if oldName == "england" or oldName == "wales" or oldName == "scotland" or oldName == "northern ireland":
        return "united kingdom"

    splt = oldName.split(", ")
    if len(splt) > 1:
        return splt[1] + " " + splt[0]
    else:
        return splt[0]
    
def lower(name):
    try:
        return name.lower()
    except:
        return name

class CityDoesNotExistException(Exception):
    pass

class MultipleCitiesException(Exception):
    pass




f = pd.read_csv("worldcities.csv").filter(["city_ascii", "lat", "lng", "country"])
f["city_ascii"] = f["city_ascii"].apply(lower)
f["country"] = f["country"].apply(lower)
f["country"] = f["country"].apply(reformat)
f["city, country"] = f["city_ascii"] + ", " + f["country"]



def getCoords(city, country, i):
    city = city.lower()
    country = country.lower()
    country = reformat(country)
    cc = city + ", " + country
    df = f[f["city, country"] == cc]
    if len(df) == 0:
        print(city, country, "does not exist!")
        return [0, 0]
        # raise CityDoesNotExistException()
    if len(df) > 1:
        print(city, country, "has multiple cities!")
        # raise MultipleCitiesException()
        return [0, 0]

    latitude = float(df["lat"].item())
    longitude = float(df["lng"].item())

    rand_angle = random.random() * 2 * math.pi
    distance = 0.01 - random.random() * 0.005
    latitude += math.sin(rand_angle) * distance
    longitude += math.cos(rand_angle) * distance

    return [latitude, longitude]



def update_bad_file(reason, i):
    badfile = open("baddirect.txt", "a")
    badfile.write(reason + str(i))
    badfile.write("\n")
    badfile.close()




# exchange_ids = [12534, 12033, 11855, 10676, 10328, 10303, 10310, 10312, 10255, 10257, 10244, 10223, 10172, 10171, 10167, 10326, 10329, 10319, 10193, 10189, 10187, 10256, 10000, 11742, 10678, 12403, 11779, 10333, 10339, 10339, 10324, 10265, 10242, 10245, 10248, 10249, 10232, 10237, 10226, 10214, 10221, 10204, 10205, 10175, 10169, 10337, 11751, 10327, 10164, 10309, 10336, 10186, 12446, 10236, 10331, 10301, 10301, 10307, 10345, 10227, 10683, 10335, 10341, 10342, 10325, 10313, 10315, 10318, 10262, 10264, 10247, 10239, 10222, 10181, 10163, 10321, 10275, 10338, 10190, 10191, 10192, 10188, 10323, 11863, 12315, 10173, 10207]
# summer_ids = [12535, 12537, 12445, 12450, 12412, 12329, 12336, 12310, 12129, 12042, 11732, 10671, 10350, 10295, 10197, 10200, 10292, 11980, 12018, 12018, 10216, 10279, 12539, 11778, 12029, 12447, 10234, 12549, 12551, 12547, 12543, 12415, 12306, 12108, 12017, 10339, 10294, 10226, 10228, 10221, 10205, 10206, 10166, 10352, 12016, 10201, 10199, 12301, 12538, 12071, 10317, 10261, 12386, 12536, 12545, 12550, 12304, 12434, 12452, 12418, 12413, 12299, 12160, 12121, 12023, 12026, 11768, 10346, 10332, 10300, 10231, 10181, 10053, 12449, 10016, 12019, 11776, 10291, 11959, 12540, 12546, 10235, 10672]
# firstyearids = [12352, 12322, 12394, 12396, 12395, 12530]
direct_enroll_ids = [12534, 10353, 10316, 10303, 10310, 10312, 10255, 10244, 10230, 10215, 10185, 10172, 10165, 10326, 10329, 10319, 12447, 10234, 12403, 10333, 10339, 10339, 10308, 10253, 10242, 10232, 10237, 10226, 10228, 10213, 10204, 10205, 10206, 10175, 10166, 10166, 10337, 11751, 10327, 10164, 10309, 10336, 10301, 10345, 10227, 10317, 12026, 10346, 10341, 10332, 10313, 10315, 10318, 10300, 10233, 10239, 10240, 10241, 10224, 10181, 11807, 10321, 10275, 10338, 12542, 10207]
# interships_ids = [12445, 12352, 10016, 10343, 10328, 10316, 10303, 10255, 10223, 10215, 10003, 10193, 10189, 10187, 10522, 10220, 12447, 12415, 11805, 12040, 10284, 10283, 10300, 12023, 12121, 12410, 10035, 12116, 10317, 12170, 10186, 10285, 10339, 10218, 10188, 10192, 10191, 10190, 12449, 10338, 10239]
# cheap_ids = [11863, 10323, 12449, 10191, 10318, 10342, 10335, 10683, 12394, 10345, 10331, 10236, 10164, 11751, 10337, 10169, 10232, 11742, 10256, 10185, 10303]
# exchange_ids = [10245, 10245]
# get_university_objects(exchange_ids)
get_university_objects(direct_enroll_ids)