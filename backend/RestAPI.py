from supabase import Client, create_client
import json
import os
import ClassList

def load_env_file(filepath):
    with open(filepath, 'r') as file:
        for line in file:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            key, value = line.split('=', 1)
            os.environ[key.strip()] = value.strip()

load_env_file("keys.env")

# Create the client API
apiURL = os.getenv("API_URL")
apiKey = os.getenv("SERVICE_ROLE_SECRET")
supabase: Client = create_client(apiURL, apiKey)

# Open the JSON
with open("data.json", 'r') as file:
    data = json.load(file)

# Post values to the Supabase table
def postSupabase(classList, supabase, class_details):
    response = (
        supabase.table("ClassData")
        .insert({"class": classList.getClassName(),
                "class_number" : classList.getClassNumber(),
                "instructor" : classList.getInstructor(), 
                "meeting_day" : classList.getMeetingDay(class_details), 
                "meeting_start" : classList.getMeetingStart(class_details),
                "meeting_end" : classList.getMeetingEnd(class_details),
                "reserved_enrollment" : classList.getReservedEnrollment(),
                "room" : classList.getRoom(),
                "total_enrollment" : classList.getTotalEnrollment(),
                "unreserved_enrollment" : classList.getUnreservedEnrollment(),
                "waitlist" : classList.getWaitlist()})
        .execute()
    )

# Clears all entries in Supabase
def deleteSupabase(supabase):
    response = supabase.table("ClassData").delete().neq("class_number", 0).execute()

# Parses the JSON for each class and pushes it to Supabase
def addClasses(data):
    for classes, class_details in data.items():
        classList = ClassList.ClassList(classes, class_details)
        postSupabase(classList, supabase, class_details)

action = input()
if (action == "1"):
    addClasses(data)
else:
    deleteSupabase(supabase)