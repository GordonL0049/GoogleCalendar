# Add any ProGuard configurations specific to this
# extension here.

-keep public class com.gordonlu.googlecalendar.GoogleCalendar {
    public *;
 }
-keeppackagenames gnu.kawa**, gnu.expr**

-optimizationpasses 4
-allowaccessmodification
-mergeinterfacesaggressively

-repackageclasses 'com/gordonlu/googlecalendar/repack'
-flattenpackagehierarchy
-dontpreverify
