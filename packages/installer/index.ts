/**
 * The installer module provides commonly used installation functions for Minecraft.
 *
 * To install Minecraft, use module {@link minecraft} or `Installer`
 *
 * To install Forge, use module {@link forge} or `ForgeInstaller`
 *
 * To install Liteloader, use module {@link liteloader} or `LiteloaderInstaller`
 *
 * To install Fabric, use module {@link fabric} or `FabricInstaller`
 *
 * @packageDocumentation
 */

import * as FabricInstaller from "./fabric";
import * as LiteLoaderInstaller from "./liteloader";
import * as ForgeInstaller from "./forge";
import * as Installer from "./minecraft";
import * as CurseforgeInstaller from "./curseforge";
import * as OptifineInstaller from "./optifine";
import * as JavaInstaller from "./java";
import * as Diagnosis from "./diagnose";

export {
    DownloadOption, Downloader, DefaultDownloader, MultipleError, downloadFileTask, InstallOptions, DownloaderOptions,
    BadCurseforgeModpackError, BadForgeInstallerJarError, BadForgeUniversalJarError, BadOptifineJarError,
    InstallerError, MissingVersionJsonError, PostProcessBadJarError, PostProcessFailedError, PostProcessNoMainClassError,
} from "./util";

export { JavaInstaller, Installer, ForgeInstaller, LiteLoaderInstaller, FabricInstaller, Diagnosis, CurseforgeInstaller, OptifineInstaller };
