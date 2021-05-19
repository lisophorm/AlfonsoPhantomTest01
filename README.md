# AlfonsoPhantomTest01

This is the execution of the exercise requested by Phantom. 

This does not pretends to be a show-off of my capabilities. This has to be considered as my ability to come with a proof of concept in a short amount of time.

I have contained the concept and the execution in exactly **4 hours**.


##Exercise url

http://phantom.crystal-bits.co.uk


##Structure and design notes

The core business logic is inside **MainComponent**. Services are initialized here. 

**PaginatorComponent** takes care of splitting the list in accordance with the current page

The list of URLs is based on the interface **PhanthomInterface**, each time a new url is added I add a unique ID that can be used in future for deleting, editing etc.

I have created also a **BookmarkService** so we save the page number after each reload

## Limitations

I haven't used yet ngRX or similar. I will do an online course in the next few days.

Validation is "manual" as per guidelines. I haven't used debouncing for the validation. 

## How I progress with the work

Very first thing I look at the data structure and I create (when required) interfaces for organising the data. Then I create some mock services for handling the data flow

To accelerate presentation times I first create some base containers (the pages). Then when I see that the mechanics is there I componentise and encapsulate the various elements.

In the specific case of this exercise I first created the page components. Then when I completed the logic of the display/pagination I encapsulate in components the various elements (table, paginator etc.).

## Important note on the validation
I use a fetch to verify if a certain url exists or not. There are cases where the browser automatically redirects from a malformed url to a correct url.

Example: www.goo redirects to www.goo.ne.js

## External libraries

Angular material 

ngx-webstorage-service - local storage for the entries

@angular/flex-layout - directives for angular to use the flex box

