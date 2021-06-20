Dim message, sapi
message=InputBox("What do you want me to say?","Speak to Me")
set sapi=createObject("sapi.spvoice")
sapi.speak message