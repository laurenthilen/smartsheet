from enum import IntEnum

class StatusTypes(IntEnum):
  NOTSTARTED = 1
  INPROGESS = 2
  COMPLETE = 3
  
  @classmethod
  def choices(cls):
    return [(key.value, key.name) for key in cls]

