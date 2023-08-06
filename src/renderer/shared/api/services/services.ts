//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from "axios";
import type { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
//@ts-ignore
import qs from "qs";
import type {
  GetTasksMassIsFinishedQueryParams,
  GetTasksMeExecutorQueryParams,
  GetTasksMeCreatorQueryParams,
  GetTasksMeControllerQueryParams,
  GetTasksMeControllerWebQueryParams,
  GetTasksQueryParams,
  GetTasksMassQueryParams,
  DeleteTasksMassQueryParams,
  ControllFilterModel,
  EmployeeModel,
  HistoryItemModel,
  MassChangeStatusToNewRequest,
  MassCreateTaskModel,
  OrgTreeNodeModel,
  PositionModel,
  PositionsLinkItemModel,
  RegionTreeNodeModel,
  StatusModel,
  TaskCommentModel,
  TaskFileModel,
  TaskListItemModel,
  TaskListItemRightsResponse,
  TaskModel,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
  return qs.stringify(requestBody);
}

export const deletePositionsPositionIdCreatorPositionsLinksLinkId = (
  positionId: number,
  linkId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deletePositionsPositionIdCreatorPositionsLinksLinkId.key, {
      positionId,
      linkId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deletePositionsPositionIdCreatorPositionsLinksLinkId.key =
  "/api/Positions/{positionId}/CreatorPositionsLinks/{linkId}";

export const deletePositionsPositionIdObserverPositionsLinksLinkId = (
  positionId: number,
  linkId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deletePositionsPositionIdObserverPositionsLinksLinkId.key, {
      positionId,
      linkId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deletePositionsPositionIdObserverPositionsLinksLinkId.key =
  "/api/Positions/{positionId}/ObserverPositionsLinks/{linkId}";

export const deleteTasksMass = (
  queryParams?: DeleteTasksMassQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteTasksMass.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deleteTasksMass.key = "/api/Tasks/Mass";

export const deleteTasksTaskId = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteTasksTaskId.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deleteTasksTaskId.key = "/api/Tasks/{taskId}";

export const deleteTasksTaskIdCommentsCommentId = (
  taskId: number,
  commentId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteTasksTaskIdCommentsCommentId.key, { taskId, commentId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deleteTasksTaskIdCommentsCommentId.key =
  "/api/Tasks/{taskId}/Comments/{commentId}";

export const deleteTasksTaskIdFilesFileId = (
  taskId: number,
  fileId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteTasksTaskIdFilesFileId.key, { taskId, fileId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
deleteTasksTaskIdFilesFileId.key = "/api/Tasks/{taskId}/Files/{fileId}";

export const getControllFilters = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ControllFilterModel>> => {
  return Http.getRequest(
    getControllFilters.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getControllFilters.key = "/api/ControllFilters";

export const getEmployees = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<EmployeeModel[]>> => {
  return Http.getRequest(
    getEmployees.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getEmployees.key = "/api/Employees";

export const getEmployeesAllowedCoExecuters = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<EmployeeModel[]>> => {
  return Http.getRequest(
    getEmployeesAllowedCoExecuters.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getEmployeesAllowedCoExecuters.key = "/api/Employees/AllowedCoExecuters";

export const getEmployeesAllowedExecuters = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<EmployeeModel[]>> => {
  return Http.getRequest(
    getEmployeesAllowedExecuters.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getEmployeesAllowedExecuters.key = "/api/Employees/AllowedExecuters";

export const getOrgTree = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<OrgTreeNodeModel[]>> => {
  return Http.getRequest(
    getOrgTree.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getOrgTree.key = "/api/OrgTree";

export const getPositions = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionModel[]>> => {
  return Http.getRequest(
    getPositions.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositions.key = "/api/Positions";

export const getPositionsPositionIdCreatorPositionsLinks = (
  positionId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionsLinkItemModel[]>> => {
  return Http.getRequest(
    template(getPositionsPositionIdCreatorPositionsLinks.key, { positionId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositionsPositionIdCreatorPositionsLinks.key =
  "/api/Positions/{positionId}/CreatorPositionsLinks";

export const getPositionsPositionIdCreatorPositionsLinksLinkId = (
  positionId: number,
  linkId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionsLinkItemModel>> => {
  return Http.getRequest(
    template(getPositionsPositionIdCreatorPositionsLinksLinkId.key, {
      positionId,
      linkId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositionsPositionIdCreatorPositionsLinksLinkId.key =
  "/api/Positions/{positionId}/CreatorPositionsLinks/{linkId}";

export const getPositionsPositionIdObserverPositionsLinks = (
  positionId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionsLinkItemModel[]>> => {
  return Http.getRequest(
    template(getPositionsPositionIdObserverPositionsLinks.key, { positionId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositionsPositionIdObserverPositionsLinks.key =
  "/api/Positions/{positionId}/ObserverPositionsLinks";

export const getPositionsPositionIdObserverPositionsLinksLinkId = (
  positionId: number,
  linkId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionsLinkItemModel>> => {
  return Http.getRequest(
    template(getPositionsPositionIdObserverPositionsLinksLinkId.key, {
      positionId,
      linkId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositionsPositionIdObserverPositionsLinksLinkId.key =
  "/api/Positions/{positionId}/ObserverPositionsLinks/{linkId}";

export const getRegionTree = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<RegionTreeNodeModel[]>> => {
  return Http.getRequest(
    getRegionTree.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRegionTree.key = "/api/RegionTree";

export const getStatuses = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<StatusModel[]>> => {
  return Http.getRequest(
    getStatuses.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getStatuses.key = "/api/Statuses";

export const getTasks = (
  queryParams?: GetTasksQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    getTasks.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasks.key = "/api/Tasks";

export const getTasksMass = (
  queryParams?: GetTasksMassQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    getTasksMass.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksMass.key = "/api/Tasks/Mass";

export const getTasksMassIsFinished = (
  queryParams?: GetTasksMassIsFinishedQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<boolean>> => {
  return Http.getRequest(
    getTasksMassIsFinished.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksMassIsFinished.key = "/api/Tasks/Mass/IsFinished";

export const getTasksMeController = (
  queryParams?: GetTasksMeControllerQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    getTasksMeController.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksMeController.key = "/api/Tasks/MeController";

export const getTasksMeControllerWeb = (
  queryParams?: GetTasksMeControllerWebQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    getTasksMeControllerWeb.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksMeControllerWeb.key = "/api/Tasks/MeControllerWeb";

export const getTasksMeCreator = (
  queryParams?: GetTasksMeCreatorQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    getTasksMeCreator.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksMeCreator.key = "/api/Tasks/MeCreator";

export const getTasksMeExecutor = (
  queryParams?: GetTasksMeExecutorQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    getTasksMeExecutor.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksMeExecutor.key = "/api/Tasks/MeExecutor";

export const getTasksTaskId = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskModel>> => {
  return Http.getRequest(
    template(getTasksTaskId.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskId.key = "/api/Tasks/{taskId}";

export const getTasksTaskIdComments = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskCommentModel[]>> => {
  return Http.getRequest(
    template(getTasksTaskIdComments.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdComments.key = "/api/Tasks/{taskId}/Comments";

export const getTasksTaskIdCommentsCommentId = (
  taskId: number,
  commentId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskCommentModel>> => {
  return Http.getRequest(
    template(getTasksTaskIdCommentsCommentId.key, { taskId, commentId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdCommentsCommentId.key =
  "/api/Tasks/{taskId}/Comments/{commentId}";

export const getTasksTaskIdFiles = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskFileModel[]>> => {
  return Http.getRequest(
    template(getTasksTaskIdFiles.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdFiles.key = "/api/Tasks/{taskId}/Files";

export const getTasksTaskIdFilesFileId = (
  taskId: number,
  fileId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.getRequest(
    template(getTasksTaskIdFilesFileId.key, { taskId, fileId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdFilesFileId.key = "/api/Tasks/{taskId}/Files/{fileId}";

export const getTasksTaskIdHistory = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<HistoryItemModel[]>> => {
  return Http.getRequest(
    template(getTasksTaskIdHistory.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdHistory.key = "/api/Tasks/{taskId}/History";

export const getTasksTaskIdRights = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemRightsResponse>> => {
  return Http.getRequest(
    template(getTasksTaskIdRights.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdRights.key = "/api/Tasks/{taskId}/Rights";

export const getTasksTaskIdSubTasks = (
  taskId: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel[]>> => {
  return Http.getRequest(
    template(getTasksTaskIdSubTasks.key, { taskId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTasksTaskIdSubTasks.key = "/api/Tasks/{taskId}/SubTasks";

export const postPositionsPositionIdCreatorPositionsLinks = (
  positionId: number,
  requestBody: PositionsLinkItemModel,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionsLinkItemModel>> => {
  return Http.postRequest(
    template(postPositionsPositionIdCreatorPositionsLinks.key, { positionId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postPositionsPositionIdCreatorPositionsLinks.key =
  "/api/Positions/{positionId}/CreatorPositionsLinks";

export const postPositionsPositionIdObserverPositionsLinks = (
  positionId: number,
  requestBody: PositionsLinkItemModel,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PositionsLinkItemModel>> => {
  return Http.postRequest(
    template(postPositionsPositionIdObserverPositionsLinks.key, { positionId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postPositionsPositionIdObserverPositionsLinks.key =
  "/api/Positions/{positionId}/ObserverPositionsLinks";

export const postTasks = (
  requestBody: TaskModel,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskModel>> => {
  return Http.postRequest(
    postTasks.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postTasks.key = "/api/Tasks";

export const postTasksMass = (
  requestBody: MassCreateTaskModel[],
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<MassCreateTaskModel[]>> => {
  return Http.postRequest(
    postTasksMass.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postTasksMass.key = "/api/Tasks/Mass";

export const postTasksMassChangeStatuses = (
  requestBody: MassChangeStatusToNewRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postTasksMassChangeStatuses.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postTasksMassChangeStatuses.key = "/api/Tasks/Mass/ChangeStatuses";

export const postTasksTaskIdComments = (
  taskId: number,
  requestBody: TaskCommentModel,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskCommentModel>> => {
  return Http.postRequest(
    template(postTasksTaskIdComments.key, { taskId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postTasksTaskIdComments.key = "/api/Tasks/{taskId}/Comments";

export const postTasksTaskIdFiles = (
  taskId: number,
  requestBody: {
    /**
     *
     * - Format: binary
     */
    file?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskFileModel>> => {
  return Http.postRequest(
    template(postTasksTaskIdFiles.key, { taskId }),
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT2, configOverride)
  );
};

/** Key is end point string without base url */
postTasksTaskIdFiles.key = "/api/Tasks/{taskId}/Files";

export const putTasksTaskId = (
  taskId: number,
  requestBody: TaskModel,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskModel>> => {
  return Http.putRequest(
    template(putTasksTaskId.key, { taskId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putTasksTaskId.key = "/api/Tasks/{taskId}";

export const putTasksTaskIdChangeStatus = (
  taskId: number,
  requestBody: StatusModel,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<TaskListItemModel>> => {
  return Http.putRequest(
    template(putTasksTaskIdChangeStatus.key, { taskId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putTasksTaskIdChangeStatus.key = "/api/Tasks/{taskId}/ChangeStatus";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "text/plain",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT2 = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "text/plain",
  },
};
