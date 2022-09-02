# <img src="https://user-images.githubusercontent.com/88015331/188106767-3a22c7bf-d3a8-4705-a719-d1de36b155bb.png" alt="drawing" height="30"/> GoogleCalendar

This is an App Inventor extension for Google Calendar. (This took me :calendar: 3 weeks to make. Hope it saved some of your time!)

Here is the first App Inventor extension for Google Calendars, with 70+ blocks. 

Google Calendars is a complicated tool for App Inventor, unlike Google Drive, and you need to set up things like permissions for Apps Script and calendar IDs. It also has 5 different permissions, unlike 4 in Google Drive, but fear not, I'll walk you through the whole process. It will only take around 5 to 10 minutes to implement this into your project.

We all know that there was a tutorial about Google Calendars at [the old forum](https://groups.google.com/g/app-inventor-developers-library/c/x4GBw8wVI0I/m/U5gU_TxwsUoJ), but it is 8 years old, Google has changed, and of course, we need a new method.

First, you have to obtain a few things - a calendar ID and a Google Apps Script. Go to the **:bookmark_tabs: Instructions before using** section after the documentation.

<h3> :bookmark_tabs: Instructions before using</h3>

***:id: 1. Obtaining your Calendar ID.***

1. Open Google Calendar.

2. Locate the list of calendars on the left panel.

**![|145x161](https://lh3.googleusercontent.com/SKRuLdkOUc8t1Oj0QK_NItf0nAEC4LZVWGKrrDuc4k4_eltDTnQ0uGN3R2R3IW_1s7cpo4aIdm48NdbBu1rG5h0s_oFLtXFBM-e0f0GJrQZ9X8z_7WIGQg6KK22i1q9XDvdxeYvtSk1md5HNEM45oIs)**

3. Hover over the specific calendar that you want to obtain and click the three dots menu. The three dots icon will only appear if you hover over the calendar item. 

**![|175x27](https://lh6.googleusercontent.com/8WXwgp6260Qmx2j2sAAI-dpq34BlUJzKxGEzdLeZgQrROyAn7E2BnHONAlzv3GxsrUAbfqHCMqUxWrCQGUyOeWwXRISpzRI2bmDXR3-vPDhge43GmyvN98VV2MhutuIGnBynu38gy83SdPM0l-4hjv0)**

4. Select "Settings and sharing".

**![|157x189](https://lh3.googleusercontent.com/x7MjyaxiX58uvZuMxk16fDbeRVq6d6vZAMH5BqSPmS2o9pMhwlftPAkQ816vetR-MYRRZVr1ey10E_3Ja2HikBUy2u-tyIRl6YheZ8TXPlLWndbH_74mS0hb9B9xOY5_rvH4pvtyRo7Q-bwMcyN1Sog)**

5. Scroll down and find a label that says "Calendar ID". Copy the calendar ID below it. For me, it is my email address, but not all calendars are the same as your email address. 

**![|353x135](https://lh4.googleusercontent.com/OdQVxqKrdrJhA21VMQW7SlR5Sa6z8uKyNI3FkazVlUs0YkDHAIQZxOk1AJgfTY55D1TbA-FycoBxIH-YDuuiOLWf8wtf3kquuymmyIVCwA6zxir-iEQ80jz4wfzl4oMDYkuC49IbcDM1dNZgxf9L8-Q)**

***:keyboard: 2. Deploying your Apps Script.***

1. Create a new Apps Script project and clear all of the code already inside the script.

2. From the Downloads section, download the `Script.txt` file and copy all of its contents and paste it into the script. Click the Save button.

3. On the left panel, locate the gear icon and click on it.

![image|238x238, 75%](upload://c4ANwS7mUie0pOCPK9Uwg7j41fk.png)

4. You will be redirected to the settings of this project. Enable "Show 'appsscript.json' manifest file in editor".

![image|621x314, 75%](upload://tpmqEMHjjcMteSqXYWCvuXh23Ee)

5. Go back to the editor by clicking on the code icon on the left panel.

![image|45x179, 75%](upload://jiHrUV59m2f8bEs48zksyfziVp7)

6. On the left control menu back in the script editor, you will see "appsscript.json" showing on top of "Code.gs". `Code.gs` is the Google Apps Script script that we code with normally, while `appsscript.json` is the manifest file of this apps script.

Android apps have an `AndroidManifest.xml` to define elements of this Android app, as you already know. This JSON file is the equivalent. Click on it. 

![image|186x201](upload://ge3yfDlAMVs8YlGKuaxD8LIU7p5.png)

You will see code in the manifest editor. Yours might be different, but mine is this.

```
{
  "timeZone": "Asia/Hong_Kong",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

According to the official Google documentation:

- if you are an editor of this calendar, no matter if you are the owner or no matter if you can share this calendar, you need two permissions: `https://www.google.com/calendar/feeds` and 
 `https://www.googleapis.com/auth/calendar`. This includes **read and write** permission.

- if you are a viewer and you do not have the permission to edit the calendar, then you have to use this permission only: `https://www.googleapis.com/auth/calendar.readonly`. This only includes read permission.

- if you are an editor of this calendar but you only need to read its details, use the two permissions in the first bulletpoint.

We will have to add an element in this manifest file that will tell Google what OAuth Scopes (or if you do not understand, permissions) we will use. So, we will add another element in the manifest.

```
"oauthScopes": [
    "https://www.googleapis.com/auth/calendar",
    "https://www.google.com/calendar/feeds"
  ]
```

Replace this link if you do not need to edit the folder.

For me, the whole manifest would become:

```
{
  "timeZone": "Asia/Hong_Kong",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
"oauthScopes": [
    "https://www.googleapis.com/auth/calendar",
    "https://www.google.com/calendar/feeds"
  ]
}
```

Click on that ![image|24x30](upload://7Api9tyBqqfbHejIDf98BHJNj2R) Save button again *in the manifest editor*. Now, the web app is ready to be deployed! To deploy the script, click on ![image|112x50](upload://5OcA9XtG1HNBAlTpjzj2ef2JNVD), select "New deployment", click on the ![image|25x30](upload://pHoAV7CO1B6J0swbZT0rX54ORKE) icon in the popup, and select "Web app".

Make sure you are executing as **you** and **anyone has access to this script**. Then click Deploy.

![image|412x233](upload://7nPgx2edwliFBly41htcDKIsb1M)

[details="If it asks you to authorize access, click here."]

The web app **might** ask you to authorize access. If so, click on ![image|168x42](upload://j5U1Gp34yMbeJp96CHeO62ecYX5.png), then a new popup would show up for you to log in to.

Click on your account in the popup.

![image|380x424, 75%](upload://rp0TxZRfB5KVc18j05Q1KD0Y9xW.png)

It will show that "Google hasn't verified this app". Don't worry, this script is totally safe. Click on `Advanced` 

![image|522x280](upload://nJO6ZWDVzZm5v5lgfALfY8pR9OG.png)

and

![image|371x98](upload://g8aM00Vg2Yf5fwzK4h1rxw1eHyl.png)

and

![image|366x500](upload://nvrywm3kbsspu00R420nSQdpSK7.png)

and the popup would close. Back in Apps Script, after it finished

![image|199x139](upload://qmpB42lHwPXUsq0dDI1ZD5heOHs.png)

, it would show the deployment ID and the deployment URL. We only need the URL, so click on ![image|81x34](upload://gXfeEu6uy87pA3JCSP8pf05utto.png) **for the URL** and head back to App Inventor.

[/details]


[details="If it doesn't, click here."]
In Apps Script, after it finished

![image|199x139](upload://qmpB42lHwPXUsq0dDI1ZD5heOHs.png)

, it would show the deployment ID and the deployment URL. We only need the URL, so click on ![image|81x34](upload://gXfeEu6uy87pA3JCSP8pf05utto.png) **for the URL** and head back to App Inventor.
[/details]

****
