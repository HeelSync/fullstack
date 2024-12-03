from selenium import webdriver
from bs4 import BeautifulSoup
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class University:
    def __init__(self, id, name, location, overview):
        self.id = id
        self.name = name
        self.location = location
        self.overview = overview

    def to_string(self):
        return self.name + " at " + self.location + " with ID " + str(id)


def create_txt_files():
    ids = [12534, 12033, 11855, 10676, 10328, 10303, 10310, 10312, 10255, 10257, 10244, 10223, 10172, 10171, 10167, 10326, 10329, 10319, 10193, 10189, 10187, 10256, 10000, 11742, 10678, 12403, 11779, 10333, 10339, 10339, 10324, 10265, 10242, 10245, 10248, 10249, 10232, 10237, 10226, 10214, 10221, 10204, 10205, 10175, 10169, 10337, 11751, 10327, 10164, 10309, 10336, 10186, 12446, 10236, 10331, 10301, 10301, 10307, 10345, 10227, 10683, 10335, 10341, 10342, 10325, 10313, 10315, 10318, 10262, 10264, 10247, 10239, 10222, 10181, 10163, 10321, 10275, 10338, 10190, 10191, 10192, 10188, 10323, 11863, 12315, 10173, 10207]
    unis = []

    for id in ids:
        driver = webdriver.Chrome()

        url = "https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=" + str(id)
        driver.get(url)

        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "h2"))
        )

        soup = BeautifulSoup(driver.page_source, 'html.parser')
        f = open("University" + str(id) + ".txt", "a")

        # get name of the university
        name = soup.find_all('h2')[0]

        # get first table containing overview, location, etc.
        table = soup.find_all('table')[0]
        rows = table.find_all('tr')

        info = [name]
        found = True
        for row in rows:
            cells = row.find_all('td')
            for cell in cells:
                t = cell.text.strip()
                if t == "Overview" or t == "Location":
                    found = False
                if not found:
                    if t == "":
                        continue
                    else:
                        info.append(t)
        f.close()
        unis.append(University(id, name, info[1], info[0]))
        driver.quit()
    print(unis)