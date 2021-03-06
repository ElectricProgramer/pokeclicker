///<reference path="Requirement.ts"/>

class RouteKillRequirement extends Requirement {
    constructor(
        value: number,
        public region: GameConstants.Region,
        public route: number,
        type: GameConstants.AchievementOption = GameConstants.AchievementOption.more
    ) {
        super(value, type);
    }

    public getProgress() {
        const routeKills = App.game.statistics.routeKills[this.region][this.route]();
        return Math.min(routeKills, this.requiredValue);
    }

    public hint(): string {
        if (this.requiredValue != GameConstants.ROUTE_KILLS_NEEDED) {
            return `${this.requiredValue} Pokémon need to be defeated on Route ${this.route}.`;
        } else {
            return `Route ${this.route} still needs to be completed.`;
        }
    }
}
