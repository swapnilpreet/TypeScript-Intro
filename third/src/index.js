var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var PrintAdminData = function (_a) {
    var ags = __rest(_a, []);
    console.log(ags);
};
var admin1 = {
    type: "admin",
    name: "masai",
    age: 3,
    role: "dev"
};
var user1 = {
    type: "user",
    name: "arun",
    age: 18,
    occupation: "teacher",
    role: "dev"
};
PrintAdminData(admin1);
PrintAdminData(user1);
