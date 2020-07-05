import functions = require('firebase-functions');
import {SHARED_CONST} from '@root/shared/src/shared-test';

export const callMe = functions.https.onCall(async (data, ctx)=>{
  return {
    req: data,
    testingThings: 'HELLO!',
    date: new Date()
  }
})
