/*

 Copyright (C) 2020 Michael Hardeman

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

PR.registerLangHandler(PR.createSimpleLexer([
  ["str", /^(?:\"(?:[^\\"\r\n]|\\.)*(?:\"|$))/, null, '"'],
  ["str", /^(?:\'(?:[^\r\n]|\\.)+(?:\'|$))/, null, "'"],
  ["typ", /:[ \t\h]*(?:[a-z]+[a-z0-9_]*)/i],
  ["pln", /^\s+/, null, " \r\n\t\u00a0"]
], [
  ["com", /^(?:[-][-].*)/, null, "\r\n"],
  ["kwd", /^(?:ABORT|ELSE|NEW|RET|RETURN|ABS|ELSIF|NOT|REVERSE|ABSTRACT|END|NULL|ACCEPT|ENTRY|SELECT|ACCESS|EXCEPTION|OOPS|OF|SEPARATE|ALIASED|EXIT|OR|SOME|ALL|OTHERS|SUBT|SUBTYPE|AND|FOR|OUT|SYNCHRONIZED|ARRAY|FUNC|FUNCTION|OVERRIDING|AT|TAGGED|GENERIC|PKG|PACKAGE|TASK|BEGIN|GOTO|PRAGMA|TERMINATE|BODY|PRIV|PRIVATE|THEN|IF|PROC|PROCEDURE|TYPE|CASE|IN|PROT|PROTECTED|CONST|CONSTANT|INTERFACE|UNTIL|IS|RAISE|USE|DECL|DECLARE|RANGE|DELAY|LIMITED|REC|RECORD|WHEN|DELTA|LOOP|REM|WHILE|DIGITS|RENAMES|WITH|DO|MOD|REQUEUE|XOR)\b/i,
    null
  ],
  ["lit", /^(?:TRUE|FLASE|NULL)/i, null],
  ["lit", /^(?:(?:2#[0-1]+(?:\.[0-1]+)?#)|(?:3#[0-2]+(?:\.[0-2]+)?#)|(?:4#[0-3]+(?:\.[0-3]+)?#)|(?:5#[0-4]+(?:\.[0-4]+)?#)|(?:6#[0-5]+(?:\.[0-5]+)?#)|(?:7#[0-6]+(?:\.[0-6]+)?#)|(?:8#[0-7]+(?:\.[0-7]+)?#)|(?:9#[0-8]+(?:\.[0-8]+)?#)|(?:10#[0-9]+(?:\.[0-9]+)?#)|(?:11#[0-10]+(?:\.[0-10]+)?#)|(?:12#[0-11]+(?:\.[0-11]+)?#)|(?:13#[0-12]+(?:\.[0-12]+)?#)|(?:14#[0-13]+(?:\.[0-13]+)?#)|(?:15#[0-14]+(?:\.[0-14]+)?#)|(?:16#[0-15]+(?:\.[0-15]+)?#))(?:E[+-]?\d+)?$/i],
  ["lit", /^(?:(?:[+-]?\d+(?:(?:#\d+(?:\.\d+)?)|(?:(?:\.\d+)?)(?:e[+-]?\d+)?)))/i, null, "0123456789"],
  ["pln", /^-*(?:[!-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])/i],
  ["pun", /^(?:[^\w\t\n\r \xA0()\"\\\';-]+)/]
]), ["adapp"]);