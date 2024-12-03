import re
class ClassList:
    def __init__(self, classes, class_details):
        self.class_name = classes
        self.class_number = class_details["class_number"]
        self.instructor = class_details["instructor"]
        self.reserved_enrollment = class_details["reserved_enrollment"]
        self.room = class_details["room"]
        self.total_enrollment = class_details["total_enrollment"]
        self.unreserved_enrollment = class_details["unreserved_enrollment"]
        self.waitlist = class_details["waitlist"]
        self.meeting_day = class_details["meeting_day"]
    
    def getMeetingDay(self, class_details):
        return re.split(r'[ -]+', class_details["meeting_day"])[0]

    def getMeetingStart(self, class_details):
        return re.split(r'[ -]+', class_details["meeting_day"])[1]

    def getMeetingEnd(self, class_details):
        return re.split(r'[ -]+', class_details["meeting_day"])[2]
    
    def getClassName(self):
        return self.class_name
    
    def getClassNumber(self):
        return self.class_number
    
    def getInstructor(self):
        return self.instructor
    
    def getReservedEnrollment(self):
        return self.reserved_enrollment
    
    def getRoom(self):
        return self.room
    
    def getTotalEnrollment(self):
        return self.total_enrollment
    
    def getUnreservedEnrollment(self):
        return self.unreserved_enrollment
    
    def getWaitlist(self):
        return self.waitlist