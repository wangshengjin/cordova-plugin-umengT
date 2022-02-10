/*
  Copyright (c) Microsoft. All rights reserved.  
  Licensed under the MIT license. See LICENSE file in the project root for full license information.
*/
var fs = require("fs");
var path = require("path");
var Q;

module.exports = function(context) {
  // Only bother if we're on OSX
  console.log(process.platform)
  if(process.platform =="darwin") {
    var execSync = require('child_process').execSync;
    // Grab the Q, glob node modules from cordova
    Q=require("q");
    execSync('cd plugins/cordova-plugin-umengT/src/ios/UMAnalytics.framework/&&ln -s -f Versions/A/Headers/ Headers&&ln -s -f Versions/A/UMAnalytics UMAnalytics');
    execSync('cd plugins/cordova-plugin-umengT/src/ios/UMCommon.framework/&&ln -s -f Versions/A/Headers/ Headers&&ln -s -f Versions/A/UMCommon UMCommon');
    // Need to return a promise since glob is async
    var deferred = Q.defer();
    
    deferred.resolve();
    return deferred.promise;
  }
}