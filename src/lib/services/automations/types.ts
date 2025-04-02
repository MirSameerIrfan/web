import { AutomationsTagsEnum, type AutomationType } from "@enums";

type AutomationTags =
    | AutomationsTagsEnum.ENSURE_BEST_PRACTICE
    | AutomationsTagsEnum.IMPROVE_PRODUCTIVITY
    | AutomationsTagsEnum.IMPROVE_DELIVERY_VISIBILITY
    | AutomationsTagsEnum.IMPROVE_DELIVERY_RISKS;

export type Automations = {
    id: string;
    name: string;
    description: string;
    tags: AutomationTags[];
    antiPatterns?: string[];
    active: boolean;
    comingSoon: boolean;
    automationType: any;
    isDefaultDisabled: boolean;
    needGithub?: boolean;
};

export type SaveTeamAutomation = {
    automationUuid: string;
    automationType: any;
};

export type TeamAutomation = {
    uuid: string;
    status: boolean;
    automation: {
        name: string;
        description: string;
        status: boolean;
        automationType: AutomationType;
    };
};
