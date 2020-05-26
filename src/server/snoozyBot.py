#############################################
#         PROJECT NAME: SNOOZY BOT          #
#        AUTHOR: GLENN HAMILTON-SMITH       #
#   DESCRIPTION: A CUSTOM BOT FOR DISCORD   #
#  WITH BASIC ADMIN FUNCTIONALITY AND SOME  #
#              PERSONALIZATION              #
#############################################
#              VERSION: BETA                #
#############################################
#                 KNOWN BUGS:               #
#############################################

import discord
import random
import time
import datetime
import csv
import re

client = discord.Client()
client.loop.set_debug(True)

@client.event
async def on_message(message):
    
    ########################
    # SUDO CHECK FUNCTION  #
    ########################
    
    def checkSudo(user, needsDreamer):
        userRoles = user.roles
        if not(needsDreamer):
            for i in range(len(userRoles)):
                if (("Dreamer" == userRoles[i].name) or ("Yawning" == userRoles[i].name) or ("Sleepless" == userRoles[i].name)):
                    return True
        else:
            for i in range(len(userRoles)):
                if (("Dreamer" == userRoles[i].name) or ("Sleepless" == userRoles[i].name)):
                    return True
        addToLog(str(time.strftime("%Y-%m-%d %H:%M")) + user.name + ' FAILED SUDO CHECK', user.server)
        return False
    
    ##############
    # UPDATE LOG #
    ##############
    
    def addToLog(text, server):
        serverName = server.name
        log = open('/home/glenn_hs/Desktop/SleepyBotRepo/SnoozyBot/Log.txt', 'a', errors='ignore')
        log.write(str('\n' + serverName + ' ' + time.strftime("%Y-%m-%d %H:%M")) + ': ' + text)
        log.close()
        
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return
        
    ###########################
    # BEGIN BOT TEXT COMMANDS #
    ###########################
    #   Z! IS SUMMON PREFIX   #
    #  ***func*** MEANS ROLE  #
    #         REQUIRED        #
    ###########################
    
    if message.content.startswith('z!help'):
        await client.send_message(message.channel, "z!help - Take a wild guess bud\nz!guess - A guessing game\nz!serverinfo - Display server information\nz!sleep x - Send a user (x is nickname) to the afk channel (requires Yawning or higher)\nz!purge x - Remove X recent messages from channel (requires Yawning or higher)\nz!botpurge - Remove all bot messages and command messages (requires Yawning or higher)\nz!quote - Show a random quote\nz!addquote - Add a quote for approval\nz!guessquote - Guess who said a quote")
        
    ###########################
    #          GUESS          #
    ###########################
    #      GUESSING GAME      #
    ###########################
    
    if (message.content == 'z!guess'):
        await client.send_message(message.channel, 'Guess a number between 1 to 10')

        def guess_check(m):
            return m.content.isdigit()

        guess = await client.wait_for_message(timeout=5.0, author=message.author, check=guess_check)
        answer = random.randint(1, 10)
        if guess is None:
            fmt = 'Sorry, you took too long. It was {}.'
            await client.send_message(message.channel, fmt.format(answer))
            return
        if int(guess.content) == answer:
            await client.send_message(message.channel, 'You are right!')
        else:
            await client.send_message(message.channel, 'Sorry. It is actually {}.'.format(answer))
    
    #########################
    #     #***PURGE***#     #
    #########################
    #  CLEAR ALL MESSAGES   #
    #########################
    
    if message.content.startswith('z!purge'):
        numToPurge = int(message.content[7:]) + 1
        if (checkSudo(message.author, True)):
            await client.purge_from(message.channel, limit=numToPurge)
            addToLog('ADMIN COMMAND: ' + message.author.name + ' purged ' + str(numToPurge) + ' messages from ' + message.channel.name, message.channel.server)
        else:
            addToLog(message.author.name + 'Attemped a purge of ' + str(numToPurge) + ' messages', message.channel.server)
            
    #########################
    #    ***BOTPURGE***     #
    #########################
    #  CLEAR BOT MESSAGES   #
    #########################
    
    if message.content.startswith('z!botpurge'):
        if (checkSudo(message.author, False)):
            def shouldDelete(m):
                if (m.author == client.user or m.content.startswith('z!')):
                    return True
                else:
                    return False
                    
            def isDelMsg(m):
                if(m.author == client.user and m.content.startswith('Deleted')):
                    return True
                else:
                    return False
                
            deleted = await client.purge_from(message.channel, limit=100, check=shouldDelete)
            await client.send_message(message.channel, 'Deleted {} message(s)'.format(len(deleted)))
            time.sleep(2)
            await client.purge_from(message.channel, limit=1, check=isDelMsg)
            addToLog('ADMIN COMMAND: ' + message.author.name + ' executed a bot purge in channel ' + message.channel.name, message.channel.server)
        else:
            addToLog(message.author.name + 'Attemped a bot purge', message.channel.server)
            
    #############################
    #       #***SLEEP***#       #
    #############################
    #     SEND USER TO AFK      #
    #############################
    
    if message.content.startswith('z!sleep'):
        if checkSudo(message.author, True):
            userToMove = message.content[8:]
            userFound = False
            for member in message.server.members:
                if (userToMove == member.name):
                    userFound = True
                    await client.send_message(message.channel, 'Go to sleep ' + userToMove)
                    await client.move_member(member,message.server.afk_channel)
                    addToLog('ADMIN COMMAND: ' + userToMove + ' moved to afk by ' + message.author.name)
            if not(userFound):
                await client.send_message(message.channel, 'No user found')
                addToLog('FAILED COMMAND: ' + userToMove + ' moved to afk by ' + message.author.name, message.channel.server)
        else:
            addToLog(message.author.name + 'Attemped to sleep ' + userToMove, message.channel.server)
    
    ############################
    #         SERVERINFO       #
    ############################
    # RETURN BASIC INFORMATION #
    ############################
    
    if (message.content == 'z!serverinfo'):
        await client.send_message(message.channel, 'Connected To: ' + message.server.name + '\nTimestamp: ' + str(time.strftime("%Y-%m-%d %H:%M")) + '\nCurrent Channel: ' + message.channel.name)
    
    ############################
    #         RANDQUOTE        #
    ############################
    #   RETURN RANDOM QUOTE    #
    ############################
    
    if (message.content == 'z!quote'):
        file = open('/home/glenn_hs/Desktop/SleepyBotRepo/SnoozyBot/Quotes.txt', 'r', errors='ignore')
        quotesListRaw = file.read()
        quotesList = quotesListRaw.split('|')
        
        quote = random.choice(quotesList)
        quoteSplit = quote.split(' - ')
        await client.send_message(message.channel, 'Quote: ' + quoteSplit[0])
        await client.send_message(message.channel, 'Said By: ' + quoteSplit[1])
    
    ############################
    #        QUOTEGUESS        #
    ############################
    # GUESS AUTHOR OF A QUOTE  #
    ############################
    
    if (message.content == 'z!guessquote'):
        file = open('/home/glenn_hs/Desktop/SleepyBotRepo/SnoozyBot/Quotes.txt', 'r', errors='ignore')
        quotesListRaw = file.read()
        quotesList = quotesListRaw.split('|')
        
        quote = random.choice(quotesList)
        quoteSplit = quote.split(' - ')
        await client.send_message(message.channel, 'Quote: ' + quoteSplit[0])
        guess = await client.wait_for_message(timeout=10.0, author=message.author)
        if (guess.content == quoteSplit[1]):
            await client.send_message(message.channel, 'Well Done!')
        else:
            await client.send_message(message.channel, 'Sorry it was said by ' + quoteSplit[1])

    #############################
    #          ADDQUOTE         #
    #############################
    # ADD A QUOTE TO QUOTES.TXT #
    #############################
    
    if (message.content == 'z!addquote'):
        await client.send_message(message.channel, 'Quote')
        quoteMsg = await client.wait_for_message(timeout=60.0, author=message.author)
        quote = quoteMsg.content
        await client.send_message(message.channel, 'Said By')
        saidMsg = await client.wait_for_message(timeout=60.0, author=message.author)
        said = saidMsg.content
        await client.send_message(message.channel, 'Quote: ' + quote + '\nSaid By: ' + said + '\n\nIs this correct? (y/n)')
        correct = await client.wait_for_message(timeout=5.0, author=message.author)
        if correct.content == 'y':
            file = open('/home/glenn_hs/Desktop/SleepyBotRepo/SnoozyBot/QuotesToBeAdded.txt', 'a+', errors='ignore')
            file.write(quote + " - " + said + '\n')
            file.close()
            await client.send_message(message.channel, 'Quote added, pending approval')
        else:
            await client.send_message(message.channel, 'Quote adding aborted')
    
    #####################
    #   JOKE COMMANDS   #
    #####################
    
    if message.content.startswith('z!hi'):
        await client.send_message(message.channel, 'Hello fleshy meatsack!')
    if message.content.startswith('z!glenn'):
        await client.send_message(message.channel, 'My creator :D')
@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')
    print('Have Fun! :)')
    print('------')

client.run('redacted')
client.logout()
