import { SvgAzureRepos } from "@components/ui/icons/SvgAzureRepos";
import { SvgBitbucket } from "@components/ui/icons/SvgBitbucket";
import { SvgGithub } from "@components/ui/icons/SvgGithub";
import { SvgGitlab } from "@components/ui/icons/SvgGitlab";
import { INTEGRATIONS_KEY } from "@enums";

export const CODE_MANAGEMENT_PLATFORMS = {
    [INTEGRATIONS_KEY.GITHUB]: {
        svg: SvgGithub,
        platformName: "Github",
    },
    [INTEGRATIONS_KEY.GITLAB]: {
        svg: SvgGitlab,
        platformName: "Gitlab",
    },
    [INTEGRATIONS_KEY.BITBUCKET]: {
        svg: SvgBitbucket,
        platformName: "Bitbucket",
    },
    [INTEGRATIONS_KEY.AZURE_REPOS]: {
        svg: SvgAzureRepos,
        platformName: "Azure Repos",
    },
} as const satisfies Partial<
    Record<
        INTEGRATIONS_KEY,
        {
            svg: React.ComponentType;
            platformName: string;
        }
    >
>;
