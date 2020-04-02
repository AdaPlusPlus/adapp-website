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
  ["lit", /^(?:(?:2#[0-1]+(?:\.[0-1]+)?#)|(?:3#[0-2]+(?:\.[0-2]+)?#)|(?:4#[0-3]+(?:\.[0-3]+)?#)|(?:5#[0-4]+(?:\.[0-4]+)?#)|(?:6#[0-5]+(?:\.[0-5]+)?#)|(?:7#[0-6]+(?:\.[0-6]+)?#)|(?:8#[0-7]+(?:\.[0-7]+)?#)|(?:9#[0-8]+(?:\.[0-8]+)?#)|(?:10#[0-9]+(?:\.[0-9]+)?#)|(?:11#[0-9A]+(?:\.[0-9A]+)?#)|(?:12#[0-9A-B]+(?:\.[0-9A-B]+)?#)|(?:13#[0-9A-C]+(?:\.[0-9A-C]+)?#)|(?:14#[0-9A-D]+(?:\.[0-9A-D]+)?#)|(?:15#[0-9A-E]+(?:\.[0-9A-E]+)?#)|(?:16#[0-9A-F]+(?:\.[0-9A-F]+)?#))(?:E[+-]?\d+)?$/i],
  ["lit", /^(?:(?:[+-]?\d+(?:(?:#\d+(?:\.\d+)?)|(?:(?:\.\d+)?)(?:e[+-]?\d+)?)))/i, null, "0123456789"],
  ["pln", /^-*(?:[!-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])/i],
  ["pun", /^(?:[^\w\t\n\r \xA0()\"\\\';-]+)/]
]), ["adapp"]);