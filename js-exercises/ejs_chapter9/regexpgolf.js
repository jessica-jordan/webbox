var carAndCat = /ca[rt]/;
print("Test 'car and cat'");
print("car: " + carAndCat.test("carrrrr"));
print("cat: " + carAndCat.test("cat"));
var popAndProp = /pr?op/;
print("Test 'pop and prop'");
print("pop: " + popAndProp.test("pop"));
print("prop: " + popAndProp.test("prop"));
var ferrets = /ferr(et|y|ari)/;
print("Test 'ferret, ferry and ferrari'");
print("ferret: " + ferrets.test("ferrettttt"));
print("ferry: " + ferrets.test("ferry"));
print("ferrari: " + ferrets.test("ferrari"));
var ious = /.*ious$/;
print("Test any word ending in 'ious'");
print("notorious: " + ious.test("notorious"));
print("steadious: " + ious.test("steadious"));
print("steadiousy: " + ious.test("steadiousy"));
var wspace = /\s[.;,:]/;
print("A whitespace char followed by a dot, comma, colon, semicolon");
print(" .: " + wspace.test(" ."));
print("         ;dasf: " + wspace.test("        ;dasf"));
print("...! : " + wspace.test("...! "));
var six = /.{7,}/;
print("A word longer than six letters");
print("choo-choo-train: " + six.test("choo-choo-train"));
print("hamburg: " + six.test("hamburg"));
print("gangst: " + six.test("gangst"));
var noE = /\b[a-df-z]+\b/;
print("A word longer than six letters");
print("banana: " + noE.test("banana"));
print(")!+!~aw: " + noE.test(")!+!~aw"));
print("chocolate: " + noE.test("chocolate"));