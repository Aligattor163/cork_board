const DEBUG_STORAGE_PROPERTY_NAME: string = "isDebugModeOn";
const LOGGER_MESSAGE_TEMPLATE: string = "[CorkBoard_app_DEBUG]: <%s>"
export const Logger = {
    debug: (message: string): boolean | void => isDebug() && console.debug(LOGGER_MESSAGE_TEMPLATE.replace("%s", message))
}

function isDebug(): boolean {
    return localStorage.getItem(DEBUG_STORAGE_PROPERTY_NAME) === "true";
}