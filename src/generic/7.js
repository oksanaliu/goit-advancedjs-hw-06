"use strict";
/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (exports.UserRole = UserRole = {}));
// Замініть наступний код на версію за допомогою Record
var RoleDescription = (_a = {},
    _a[UserRole.admin] = 'Admin User',
    _a[UserRole.editor] = 'Editor User',
    _a[UserRole.guest] = 'Guest User',
    _a);
