/*
Mocha integration test from: hnews.html
The test was built on Thu Sep 19 2013 15:09:18 GMT+0100 (BST)
*/

var assert = chai.assert;


describe('Minimum properties (hnews parsing test)', function() {
   var htmlFragment = "\n<div class=\"hnews\">\n    <div class=\"entry hentry\">\n        <h1><a class=\"entry-title\" rel=\"bookmark\" href=\"http://microformats.org/2012/06/25/microformats-org-at-7\">microformats.org at 7</a></h1>\n        <div class=\"entry-content\">\n            <p class=\"entry-summary\">Last week the microformats.org community \n                celebrated its 7th birthday at a gathering hosted by Mozilla in \n                San Francisco and recognized accomplishments, challenges, and \n                opportunities.</p>\n\n            <p>The microformats tagline &#8220;humans first, machines second&#8221; \n                forms the basis of many of our \n                <a href=\"http://microformats.org/wiki/principles\">principles</a>, and \n                in that regard, we&#8217;d like to recognize a few people and \n                thank them for their years of volunteer service </p>\n        </div>  \n        <p>Updated \n            <time class=\"updated\" datetime=\"2012-06-25T17:08:26\">June 25th, 2012</time> by\n            <span class=\"author vcard\"><a class=\"fn url\" href=\"http://tantek.com/\">Tantek</a></span>\n        </p>\n    </div>\n\n    <p class=\"source-org vcard\">\n        <a class=\"fn org url\" href=\"http://microformats.org/\">microformats.org</a> \n    </p>\n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-news"],"properties":{"entry":[{"value":"microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek","type":["h-entry"],"properties":{"name":["microformats.org at 7"],"author":{"value":"Tantek","type":["h-card"],"properties":{"name":["Tantek"],"url":["http://tantek.com/"]}}}}],"source-org":[{"value":"microformats.org","type":["h-card"],"properties":{"name":["microformats.org"],"url":["http://microformats.org/"]}}],"name":["microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek microformats.org"]}},{"type":["rel"],"properties":{"bookmark":["http://microformats.org/2012/06/25/microformats-org-at-7"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-news");
   })

   it("found.items[0].properties['entry'][0].value", function(){
      assert.equal(found.items[0].properties["entry"][0].value, "microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek");
   })

   it("found.items[0].properties['entry'][0].type[0]", function(){
      assert.equal(found.items[0].properties["entry"][0].type[0].toString(), "h-entry");
   })

   it("found.items[0].properties['entry'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["entry"][0].properties["name"][0].toString(), "microformats.org at 7");
   })

   it("found.items[0].properties['source-org'][0].value", function(){
      assert.equal(found.items[0].properties["source-org"][0].value, "microformats.org");
   })

   it("found.items[0].properties['source-org'][0].type[0]", function(){
      assert.equal(found.items[0].properties["source-org"][0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['source-org'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["source-org"][0].properties["name"][0].toString(), "microformats.org");
   })

   it("found.items[0].properties['source-org'][0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["source-org"][0].properties["url"][0].toString(), "http://microformats.org/");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek microformats.org");
   })

})




describe('With dateline vcard (hnews parsing test)', function() {
   var htmlFragment = "\n<div class=\"hnews\">\n    <div class=\"entry hentry\">\n        <h1><a class=\"entry-title\" rel=\"bookmark\" href=\"http://microformats.org/2012/06/25/microformats-org-at-7\">microformats.org at 7</a></h1>\n        <div class=\"entry-content\">\n            <p class=\"entry-summary\">Last week the microformats.org community \n                celebrated its 7th birthday at a gathering hosted by Mozilla in \n                San Francisco and recognized accomplishments, challenges, and \n                opportunities.</p>\n\n            <p>The microformats tagline &#8220;humans first, machines second&#8221; \n                forms the basis of many of our \n                <a href=\"http://microformats.org/wiki/principles\">principles</a>, and \n                in that regard, we&#8217;d like to recognize a few people and \n                thank them for their years of volunteer service </p>\n        </div>  \n        <p>Updated \n            <time class=\"updated\" datetime=\"2012-06-25T17:08:26\">June 25th, 2012</time> by\n            <span class=\"author vcard\"><a class=\"fn url\" href=\"http://tantek.com/\">Tantek</a></span>\n        </p>\n    </div>\n\n    <p>\n        <span class=\"dateline vcard\">\n            <span class=\"adr\">\n                <span class=\"locality\">San Francisco</span>, \n                <span class=\"region\">CA</span> \n            </span>\n        </span>\n        (Geo: <span class=\"geo\">37.774921;-122.445202</span>) \n        <span class=\"source-org vcard\">\n            <a class=\"fn org url\" href=\"http://microformats.org/\">microformats.org</a>\n        </span>\n    </p>\n    <p>\n        <a rel=\"principles\" href=\"http://microformats.org/wiki/Category:public_domain_license\">Publishing policy</a>\n    </p>\n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-news"],"properties":{"entry":[{"value":"microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek","type":["h-entry"],"properties":{"name":["microformats.org at 7"],"summary":["Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities."],"updated":["2012-06-25T17:08:26"],"author":{"value":"Tantek","type":["h-card"],"properties":{"name":["Tantek"],"url":["http://tantek.com/"]}}}}],"dateline":[{"value":"San Francisco, CA","type":["h-card"],"properties":{"adr":[{"value":"San Francisco, CA","type":["h-adr"],"properties":{"locality":["San Francisco"],"region":["CA"],"name":["San Francisco, CA"]}}],"name":["San Francisco, CA"]}}],"geo":[{"value":"37.774921;-122.445202","type":["h-geo"],"properties":{"name":["37.774921;-122.445202"]}}],"source-org":[{"value":"microformats.org","type":["h-card"],"properties":{"name":["microformats.org"],"url":["http://microformats.org/"]}}],"name":["microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek San Francisco, CA (Geo: 37.774921;-122.445202) microformats.org Publishing policy"]}},{"type":["rel"],"properties":{"bookmark":["http://microformats.org/2012/06/25/microformats-org-at-7"],"principles":["http://microformats.org/wiki/Category:public_domain_license"]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-news");
   })

   it("found.items[0].properties['entry'][0].value", function(){
      assert.equal(found.items[0].properties["entry"][0].value, "microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek");
   })

   it("found.items[0].properties['entry'][0].type[0]", function(){
      assert.equal(found.items[0].properties["entry"][0].type[0].toString(), "h-entry");
   })

   it("found.items[0].properties['entry'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["entry"][0].properties["name"][0].toString(), "microformats.org at 7");
   })

   it("found.items[0].properties['entry'][0].properties['summary'][0]", function(){
      assert.equal(found.items[0].properties["entry"][0].properties["summary"][0].toString(), "Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities.");
   })

   it("found.items[0].properties['entry'][0].properties['updated'][0]", function(){
      assert.equal(found.items[0].properties["entry"][0].properties["updated"][0].toString(), "2012-06-25T17:08:26");
   })

   it("found.items[0].properties['dateline'][0].value", function(){
      assert.equal(found.items[0].properties["dateline"][0].value, "San Francisco, CA");
   })

   it("found.items[0].properties['dateline'][0].type[0]", function(){
      assert.equal(found.items[0].properties["dateline"][0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['dateline'][0].properties['adr'][0].value", function(){
      assert.equal(found.items[0].properties["dateline"][0].properties["adr"][0].value, "San Francisco, CA");
   })

   it("found.items[0].properties['dateline'][0].properties['adr'][0].type[0]", function(){
      assert.equal(found.items[0].properties["dateline"][0].properties["adr"][0].type[0].toString(), "h-adr");
   })

   it("found.items[0].properties['dateline'][0].properties['adr'][0].properties['locality'][0]", function(){
      assert.equal(found.items[0].properties["dateline"][0].properties["adr"][0].properties["locality"][0].toString(), "San Francisco");
   })

   it("found.items[0].properties['dateline'][0].properties['adr'][0].properties['region'][0]", function(){
      assert.equal(found.items[0].properties["dateline"][0].properties["adr"][0].properties["region"][0].toString(), "CA");
   })

   it("found.items[0].properties['dateline'][0].properties['adr'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["dateline"][0].properties["adr"][0].properties["name"][0].toString(), "San Francisco, CA");
   })

   it("found.items[0].properties['dateline'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["dateline"][0].properties["name"][0].toString(), "San Francisco, CA");
   })

   it("found.items[0].properties['geo'][0].value", function(){
      assert.equal(found.items[0].properties["geo"][0].value, "37.774921;-122.445202");
   })

   it("found.items[0].properties['geo'][0].type[0]", function(){
      assert.equal(found.items[0].properties["geo"][0].type[0].toString(), "h-geo");
   })

   it("found.items[0].properties['geo'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["geo"][0].properties["name"][0].toString(), "37.774921;-122.445202");
   })

   it("found.items[0].properties['source-org'][0].value", function(){
      assert.equal(found.items[0].properties["source-org"][0].value, "microformats.org");
   })

   it("found.items[0].properties['source-org'][0].type[0]", function(){
      assert.equal(found.items[0].properties["source-org"][0].type[0].toString(), "h-card");
   })

   it("found.items[0].properties['source-org'][0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["source-org"][0].properties["name"][0].toString(), "microformats.org");
   })

   it("found.items[0].properties['source-org'][0].properties['url'][0]", function(){
      assert.equal(found.items[0].properties["source-org"][0].properties["url"][0].toString(), "http://microformats.org/");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "microformats.org at 7 Last week the microformats.org community celebrated its 7th birthday at a gathering hosted by Mozilla in San Francisco and recognized accomplishments, challenges, and opportunities. The microformats tagline “humans first, machines second” forms the basis of many of our principles, and in that regard, we’d like to recognize a few people and thank them for their years of volunteer service Updated June 25th, 2012 by Tantek San Francisco, CA (Geo: 37.774921;-122.445202) microformats.org Publishing policy");
   })

})




