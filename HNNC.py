import time
import random
from google.cloud import firestore

INFO = [0, 0, 0, 0, 0, 0, 0]

HECKINNERDS = [" BryceRombach", " EthanBrody", " StoneBrackett", " PaxtonLeaf",
               " NateWoo", " BenGochanour", " BrettFrancis", " JordanZimmerman",
               " PerryPowell", " AlexParsells", " JamesMartindale", " TimGehrsitz",
               " ErikFretland", " JacobLuft"]

def generaterandom():
    """Generates and reads random line""" 
    random.seed()
    f = open("DataParsed.txt", "r") 
    lineno = random.randint(1, 13912) #INPUT CORRECT NUMBER OF ROWS
    lines = f.readlines()
    line = lines[lineno]
    sectionbreaks = []
    f.close()
    for i in range(len(line)):#Dividing up into sections
        if line[i] == "|" and len(sectionbreaks) < 1:
            sectionbreaks.append(i)
        elif line[i] == "|" and len(sectionbreaks) == 1:
            sectionbreaks.append(i - 1)
        elif line[i] == "|" and len(sectionbreaks) == 2:
            sectionbreaks.append(i)
        elif line[i] == "|" and len(sectionbreaks) == 3:
            sectionbreaks.append(i)
        elif line[i] == "|" and len(sectionbreaks) == 4:
            sectionbreaks.append(i)
        elif line[i] == "|" and len(sectionbreaks) == 5:
            sectionbreaks.append(i)
        
    INFO[0] = line[0:(sectionbreaks[0] - 1)] #MessageType
    INFO[1] = line[(sectionbreaks[0] + 1):(sectionbreaks[1] - 1)] #AVATARURL
    INFO[2] = line[(sectionbreaks[1] + 1):(sectionbreaks[2] - 1)] #TIMESTAMP
    INFO[3] = line[(sectionbreaks[2] + 1):(sectionbreaks[3] - 1)] #LIKES
    INFO[4] = line[(sectionbreaks[3] + 1):(sectionbreaks[4] - 1)] #NICKNAME
    INFO[5] = line[(sectionbreaks[4] + 1):(sectionbreaks[5] - 1)] #SENTBY
    INFO[6] = line[(sectionbreaks[5] + 1):] #MESSAGE

    return None

def Round(INFO):
    """Plays one round of the game"""
    indices = [0, 0, 0, 0]
    indices[0] = HECKINNERDS.index(INFO[5]) #Correct Answer

    for i in range(3):
        prandom = random.randint(0, 101)
        if prandom <= 9:
            indices[i+1] = 0
        elif prandom <= 20:
            indices[i+1] = 1
        elif prandom <= 31:
            indices[i+1] = 2
        elif prandom <= 36:
            indices[i+1] = 3
        elif prandom <= 46:
            indices[i+1] = 4
        elif prandom <= 53:
            indices[i+1] = 5
        elif prandom <= 59:
            indices[i+1] = 6
        elif prandom <= 67:
            indices[i+1] = 7
        elif prandom <= 74:
            indices[i+1] = 8
        elif prandom <= 84:
            indices[i+1] = 9
        elif prandom <= 85:
            indices[i+1] = 10
        elif prandom <= 94:
            indices[i+1] = 11
        elif prandom <= 95:
            indices[i+1] = 12
        elif prandom <= 101:
            indices[i+1] = 13
        else:
            pass
    while indices[0] == indices[1]:
        prandom = random.randint(0, 101)
        if prandom <= 9:
            indices[1] = 0
        elif prandom <= 20:
            indices[1] = 1
        elif prandom <= 31:
            indices[1] = 2
        elif prandom <= 36:
            indices[1] = 3
        elif prandom <= 46:
            indices[1] = 4
        elif prandom <= 53:
            indices[1] = 5
        elif prandom <= 59:
            indices[1] = 6
        elif prandom <= 67:
            indices[1] = 7
        elif prandom <= 74:
            indices[1] = 8
        elif prandom <= 84:
            indices[1] = 9
        elif prandom <= 85:
            indices[1] = 10
        elif prandom <= 94:
            indices[1] = 11
        elif prandom <= 95:
            indices[1] = 12
        elif prandom <= 101:
            indices[1] = 13
        else:
            pass
    while indices[2] == indices[1] or indices[2] == indices[0]:
        prandom = random.randint(0, 101)
        if prandom <= 9:
            indices[2] = 0
        elif prandom <= 20:
            indices[2] = 1
        elif prandom <= 31:
            indices[2] = 2
        elif prandom <= 36:
            indices[2] = 3
        elif prandom <= 46:
            indices[2] = 4
        elif prandom <= 53:
            indices[2] = 5
        elif prandom <= 59:
            indices[2] = 6
        elif prandom <= 67:
            indices[2] = 7
        elif prandom <= 74:
            indices[2] = 8
        elif prandom <= 84:
            indices[2] = 9
        elif prandom <= 85:
            indices[2] = 10
        elif prandom <= 94:
            indices[2] = 11
        elif prandom <= 95:
            indices[2] = 12
        elif prandom <= 101:
            indices[2] = 13
        else:
            pass
    while indices[3] == indices[0] or indices[3] == indices[1] or indices[2] == indices[3]:
        prandom = random.randint(0,101)
        if prandom <= 9:
            indices[3] = 0
        elif prandom <= 20:
            indices[3] = 1
        elif prandom <= 31:
            indices[3] = 2
        elif prandom <= 36:
            indices[3] = 3
        elif prandom <= 46:
            indices[3] = 4
        elif prandom <= 53:
            indices[3] = 5
        elif prandom <= 59:
            indices[3] = 6
        elif prandom <= 67:
            indices[3] = 7
        elif prandom <= 74:
            indices[3] = 8
        elif prandom <= 84:
            indices[3] = 9
        elif prandom <= 85:
            indices[3] = 10
        elif prandom <= 94:
            indices[3] = 11
        elif prandom <= 95:
            indices[3] = 12
        elif prandom <= 101:
            indices[3] = 13
        else:
            pass
    
    order = [0, 0, 0, 0]
    order[0] = random.randint(0, 3)
    order[1] = random.randint(0, 3)
    order[2] = random.randint(0, 3)
    order[3] = random.randint(0, 3)
    while order[0] == order[1]:
        order[1] = random.randint(0, 3)
    while order[2] == order[1] or order[2] == order[0]:
        order[2] = random.randint(0, 3)
    while order[3] == order[0] or order[3] == order[1] or order[2] == order[3]:
        order[3] = random.randint(0, 3)
    
    #WHICH HECKIN NERD SAID:
    #Print INFO[6]
    #db = firestore.Client()
    #data = {
    #u'a': HECKINNERDS[indices[order[0]]],
    #u'b': HECKINNERDS[indices[order[1]]],
    #'c': HECKINNERDS[indices[order[2]]],
    #u'd': HECKINNERDS[indices[order[3]]],
    #u'Quote': INFO[6],
    #u'Answer:': INFO[5],
    #}

    #db.collection(u'users').document(u'INFO').set(data)

    print("Who Said:{}".format(INFO[6]))
    print("a.",HECKINNERDS[indices[order[0]]])
    print("b.",HECKINNERDS[indices[order[1]]])
    print("c.",HECKINNERDS[indices[order[2]]])
    print("d.",HECKINNERDS[indices[order[3]]])
    print("Answer:",INFO[5])


    return None

def main():
    """Main Function Of Game"""
    i = 0
    RoundsPlayed = 10 
    while i < RoundsPlayed:
        generaterandom()
        Round(INFO)
        i = i + 1

    return None


main()
