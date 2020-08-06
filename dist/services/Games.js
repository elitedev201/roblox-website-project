"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class GamesService extends base_1.default {
    getGamesByUser(userId, accessFilter, cursor = '') {
        return this.get('https://games.roblox.com/v2/users/' + userId + '/games?accessFilter=' + accessFilter + '&sortOrder=Asc&limit=100&cursor=' + encodeURIComponent(cursor));
    }
}
exports.default = GamesService;
//# sourceMappingURL=Games.js.map