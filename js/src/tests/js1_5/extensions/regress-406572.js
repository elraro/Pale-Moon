/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 406572;
var summary = 'JSOP_CLOSURE unconditionally replaces properties of the variable object - Browser only';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

if (typeof window != 'undefined')
{
  var d = document;

  d.writeln(uneval(document));
  document = 1;
  d.writeln(uneval(document));

  if (1)
    function document() { return 1; }

  d.writeln(uneval(document));

  // The test harness relies on document having its original value: restore it.
  document = d;
}
else
{
  expect = actual = 'Test can only run in a Goanna 1.9 browser or later.';
  print(actual);
}
reportCompare(expect, actual, summary);


