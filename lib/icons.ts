import AwsAmazonSimpleStorageServiceLogo from "@thesvg/react/aws-amazon-simple-storage-service";
import ElectronLogo from "@thesvg/react/electron";
import ExpoLogo from "@thesvg/react/expo";
import ExpressLogo from "@thesvg/react/expressdotjs";
import FFmpegLogo from "@thesvg/react/ffmpeg";
import FirebaseLogo from "@thesvg/react/firebase";
import GithubActionsLogo from "@thesvg/react/github-actions";
import GraphqlLogo from "@thesvg/react/graphql";
import HasuraLogo from "@thesvg/react/hasura";
import IonicLogo from "@thesvg/react/ionic";
import JavascriptLogo from "@thesvg/react/javascript";
import KonvaLogo from "@thesvg/react/konva";
import NestjsLogo from "@thesvg/react/nestjs";
import NextjsLogo from "@thesvg/react/nextdotjs";
import NodejsLogo from "@thesvg/react/nodedotjs";
import PostgresqlLogo from "@thesvg/react/postgresql";
import PuppeteerLogo from "@thesvg/react/puppeteer";
import ReactLogo from "@thesvg/react/react";
import ReduxLogo from "@thesvg/react/redux";
import StrapiLogo from "@thesvg/react/strapi";
import TypescriptLogo from "@thesvg/react/typescript";
import WebpackLogo from "@thesvg/react/webpack";
import XTwitterLogo from "@thesvg/react/x-formerly-twitter";
import {
    Bot,
    Brain,
    Briefcase,
    Code,
    Cpu,
    createLucideIcon,
    Database,
    Globe,
    Home,
    Layers,
    type LucideIcon,
    Mail,
    Palette,
    Smartphone,
    Terminal,
    User,
} from "lucide-react";
import {
    type ComponentPropsWithoutRef,
    type ComponentType,
    createElement,
} from "react";

export type AppIconProps = ComponentPropsWithoutRef<"svg"> & {
    size?: number | string;
    strokeWidth?: number;
};

export type AppIcon = ComponentType<AppIconProps>;

const wrapLucideIcon = (Icon: LucideIcon): AppIcon =>
    Icon as unknown as AppIcon;

const wrapBrandIcon = (
    Icon: ComponentType<ComponentPropsWithoutRef<"svg">>,
): AppIcon => {
    function WrappedBrandIcon({
        size = 24,
        strokeWidth: _strokeWidth,
        ...props
    }: AppIconProps) {
        return createElement(Icon, {
            ...props,
            width: props.width ?? size,
            height: props.height ?? size,
        });
    }

    WrappedBrandIcon.displayName =
        Icon.displayName ?? Icon.name ?? "WrappedBrandIcon";

    return WrappedBrandIcon;
};

const Github = wrapLucideIcon(
    createLucideIcon("Github", [
        [
            "path",
            {
                d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
                key: "1",
            },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "2" }],
    ]),
);
const Linkedin = wrapLucideIcon(
    createLucideIcon("Linkedin", [
        [
            "path",
            {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                key: "1",
            },
        ],
        ["rect", { width: "4", height: "12", x: "2", y: "9", key: "2" }],
        ["circle", { cx: "4", cy: "4", r: "2", key: "3" }],
    ]),
);
const XTwitter = wrapBrandIcon(XTwitterLogo);

const ICON_MAP: Record<string, AppIcon> = {
    Home: wrapLucideIcon(Home),
    User: wrapLucideIcon(User),
    Code: wrapLucideIcon(Code),
    Briefcase: wrapLucideIcon(Briefcase),
    Layers: wrapLucideIcon(Layers),
    Mail: wrapLucideIcon(Mail),
    Github,
    Linkedin,
    XTwitter,
    Terminal: wrapLucideIcon(Terminal),
    Globe: wrapLucideIcon(Globe),
    Database: wrapLucideIcon(Database),
    Palette: wrapLucideIcon(Palette),
    Cpu: wrapLucideIcon(Cpu),
    Smartphone: wrapLucideIcon(Smartphone),
    Bot: wrapLucideIcon(Bot),
    Brain: wrapLucideIcon(Brain),
    SiReact: wrapBrandIcon(ReactLogo),
    SiTypescript: wrapBrandIcon(TypescriptLogo),
    SiJavascript: wrapBrandIcon(JavascriptLogo),
    SiNodedotjs: wrapBrandIcon(NodejsLogo),
    SiExpress: wrapBrandIcon(ExpressLogo),
    SiNestjs: wrapBrandIcon(NestjsLogo),
    SiRedux: wrapBrandIcon(ReduxLogo),
    SiWebpack: wrapBrandIcon(WebpackLogo),
    SiAmazons3: wrapBrandIcon(AwsAmazonSimpleStorageServiceLogo),
    SiFFmpeg: wrapBrandIcon(FFmpegLogo),
    SiPuppeteer: wrapBrandIcon(PuppeteerLogo),
    SiGithubactions: wrapBrandIcon(GithubActionsLogo),
    SiNextdotjs: wrapBrandIcon(NextjsLogo),
    SiGraphql: wrapBrandIcon(GraphqlLogo),
    SiPostgresql: wrapBrandIcon(PostgresqlLogo),
    SiIonic: wrapBrandIcon(IonicLogo),
    SiFirebase: wrapBrandIcon(FirebaseLogo),
    SiExpo: wrapBrandIcon(ExpoLogo),
    SiStrapi: wrapBrandIcon(StrapiLogo),
    SiElectron: wrapBrandIcon(ElectronLogo),
    SiHasura: wrapBrandIcon(HasuraLogo),
    SiKonva: wrapBrandIcon(KonvaLogo),
};

export function getIcon(name: string): AppIcon {
    return ICON_MAP[name] ?? wrapLucideIcon(Code);
}

export type { LucideIcon };
export { Github };
