//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface AdaptationFileModel {
  fileName?: string;
  fileTableName?: string;
}

export interface ControllFilterItemModel {
  /**
   *
   * - Format: int32
   */
  id?: number;
  parentDepartments?: number[];
  parentDivisions?: number[];
  parentOrgDepartments?: number[];
  parentOrgDirections?: number[];
  parentOrgOffices?: number[];
  parentOrgPositions?: number[];
  parentRegions?: number[];
  parentRetails?: number[];
  title?: string;
  type?: FilterItemType;
}

export interface ControllFilterModel {
  departmentsAndDepts?: ControllFilterItemModel[];
  directionsAndRegions?: ControllFilterItemModel[];
  employees?: ControllFilterItemModel[];
  officesAndDivisions?: ControllFilterItemModel[];
  positionsAndRetails?: ControllFilterItemModel[];
}

export interface DeleteTasksMassQueryParams {
  taskIds?: number[];
}

export interface EmployeeModel {
  employeeName?: string;
  employeePosition?: string;
  /**
   *
   * - Format: int32
   */
  id?: number;
}

/**
 *
 * - Format: int32
 */

export type FilterItemType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8";

export interface GetTasksMassIsFinishedQueryParams {
  taskIds?: number[];
}

export interface GetTasksMassQueryParams {
  /**
   *
   * - Format: int32
   */
  CoExecutorId?: number;
  CoExecutorIds?: number[];
  /**
   *
   * - Format: int32
   */
  CreatorId?: number;
  CreatorIds?: number[];
  /**
   *
   * - Format: int32
   */
  ExecutorId?: number;
  ExecutorIds?: number[];
  /**
   *
   * - Format: date-time
   */
  FinishDate?: string;
  IsTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  ObserverId?: number;
  OrderBy?: string;
  /**
   *
   * - Format: int32
   */
  OrgHierId?: number;
  OrgHierIsLeader?: boolean;
  /**
   *
   * - Format: int32
   */
  PageNumber?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDeptId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDivisionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRegionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRetailId?: number;
  RegionHierType?: RegionTreeItemType;
  SearchText?: string;
  /**
   *
   * - Format: date-time
   */
  StartDate?: string;
  StatusIds?: number[];
  TaskIds?: number[];
}

export interface GetTasksMeControllerQueryParams {
  /**
   *
   * - Format: int32
   */
  CoExecutorId?: number;
  CoExecutorIds?: number[];
  /**
   *
   * - Format: int32
   */
  CreatorId?: number;
  CreatorIds?: number[];
  /**
   *
   * - Format: int32
   */
  ExecutorId?: number;
  ExecutorIds?: number[];
  /**
   *
   * - Format: date-time
   */
  FinishDate?: string;
  IsTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  ObserverId?: number;
  OrderBy?: string;
  /**
   *
   * - Format: int32
   */
  OrgHierId?: number;
  OrgHierIsLeader?: boolean;
  /**
   *
   * - Format: int32
   */
  PageNumber?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDeptId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDivisionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRegionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRetailId?: number;
  RegionHierType?: RegionTreeItemType;
  SearchText?: string;
  /**
   *
   * - Format: date-time
   */
  StartDate?: string;
  StatusIds?: number[];
  TaskIds?: number[];
}

export interface GetTasksMeControllerWebQueryParams {
  /**
   *
   * - Format: int32
   */
  CoExecutorId?: number;
  CoExecutorIds?: number[];
  /**
   *
   * - Format: int32
   */
  CreatorId?: number;
  CreatorIds?: number[];
  DepartmentIds?: number[];
  DivisionIds?: number[];
  EmployeeIds?: number[];
  /**
   *
   * - Format: int32
   */
  ExecutorId?: number;
  ExecutorIds?: number[];
  /**
   *
   * - Format: date-time
   */
  FinishDate?: string;
  IsTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  ObserverId?: number;
  OrderBy?: string;
  OrgDepartmentIds?: number[];
  OrgDirectionIds?: number[];
  OrgOfficeIds?: number[];
  OrgPositionIds?: number[];
  /**
   *
   * - Format: int32
   */
  PageNumber?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  RegionIds?: number[];
  RetailIds?: number[];
  SearchText?: string;
  /**
   *
   * - Format: date-time
   */
  StartDate?: string;
  StatusIds?: number[];
  TaskIds?: number[];
}

export interface GetTasksMeCreatorQueryParams {
  /**
   *
   * - Format: int32
   */
  CoExecutorId?: number;
  CoExecutorIds?: number[];
  /**
   *
   * - Format: int32
   */
  CreatorId?: number;
  CreatorIds?: number[];
  /**
   *
   * - Format: int32
   */
  ExecutorId?: number;
  ExecutorIds?: number[];
  /**
   *
   * - Format: date-time
   */
  FinishDate?: string;
  IsTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  ObserverId?: number;
  OrderBy?: string;
  /**
   *
   * - Format: int32
   */
  OrgHierId?: number;
  OrgHierIsLeader?: boolean;
  /**
   *
   * - Format: int32
   */
  PageNumber?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDeptId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDivisionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRegionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRetailId?: number;
  RegionHierType?: RegionTreeItemType;
  SearchText?: string;
  /**
   *
   * - Format: date-time
   */
  StartDate?: string;
  StatusIds?: number[];
  TaskIds?: number[];
}

export interface GetTasksMeExecutorQueryParams {
  /**
   *
   * - Format: int32
   */
  CoExecutorId?: number;
  CoExecutorIds?: number[];
  /**
   *
   * - Format: int32
   */
  CreatorId?: number;
  CreatorIds?: number[];
  /**
   *
   * - Format: int32
   */
  ExecutorId?: number;
  ExecutorIds?: number[];
  /**
   *
   * - Format: date-time
   */
  FinishDate?: string;
  IsTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  ObserverId?: number;
  OrderBy?: string;
  /**
   *
   * - Format: int32
   */
  OrgHierId?: number;
  OrgHierIsLeader?: boolean;
  /**
   *
   * - Format: int32
   */
  PageNumber?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDeptId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDivisionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRegionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRetailId?: number;
  RegionHierType?: RegionTreeItemType;
  SearchText?: string;
  /**
   *
   * - Format: date-time
   */
  StartDate?: string;
  StatusIds?: number[];
  TaskIds?: number[];
}

export interface GetTasksQueryParams {
  /**
   *
   * - Format: int32
   */
  CoExecutorId?: number;
  CoExecutorIds?: number[];
  /**
   *
   * - Format: int32
   */
  CreatorId?: number;
  CreatorIds?: number[];
  /**
   *
   * - Format: int32
   */
  ExecutorId?: number;
  ExecutorIds?: number[];
  /**
   *
   * - Format: date-time
   */
  FinishDate?: string;
  IsTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  ObserverId?: number;
  OrderBy?: string;
  /**
   *
   * - Format: int32
   */
  OrgHierId?: number;
  OrgHierIsLeader?: boolean;
  /**
   *
   * - Format: int32
   */
  PageNumber?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDeptId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierDivisionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRegionId?: number;
  /**
   *
   * - Format: int32
   */
  RegionHierRetailId?: number;
  RegionHierType?: RegionTreeItemType;
  SearchText?: string;
  /**
   *
   * - Format: date-time
   */
  StartDate?: string;
  StatusIds?: number[];
  TaskIds?: number[];
}

export interface HistoryItemModel {
  /**
   *
   * - Format: date-time
   */
  actionDate?: string;
  actionName?: string;
  actorName?: string;
  objects?: HistoryItemObjectModel[];
}

export interface HistoryItemObjectModel {
  newValue?: string;
  objectName?: string;
  oldValue?: string;
}

export interface MassChangeStatusToNewRequest {
  taskIds?: number[];
}

export interface MassCreateTaskModel {
  coExecutors?: EmployeeModel[];
  creator?: EmployeeModel;
  /**
   *
   * - Format: date-time
   */
  dateFinish?: string;
  /**
   *
   * - Format: date-time
   */
  dateStart?: string;
  description?: string;
  executor?: EmployeeModel;
  filesForCreation?: AdaptationFileModel[];
  /**
   *
   * - Format: int32
   */
  id?: number;
  isAdaptation?: boolean;
  isTarget?: boolean;
  observers?: EmployeeModel[];
  /**
   *
   * - Format: int32
   */
  originEntityId?: number;
  /**
   *
   * - Format: int32
   */
  originId?: number;
  status?: StatusModel;
  title?: string;
}

export interface OrgTreeNodeModel {
  /**
   *
   * - Format: int32
   */
  id?: number;
  isLeader?: boolean;
  /**
   *
   * - Format: int32
   */
  level?: number;
  nodes?: OrgTreeNodeModel[];
  title?: string;
}

export interface PositionModel {
  /**
   *
   * - Format: int32
   */
  id?: number;
  title?: string;
}

export interface PositionsLinkItemModel {
  executorPosition?: PositionModel;
  /**
   *
   * - Format: int32
   */
  id?: number;
}

/**
 *
 * - Format: int32
 */

export type RegionTreeItemType = "0" | "1" | "2" | "3" | "4";

export interface RegionTreeNodeModel {
  /**
   *
   * - Format: int32
   */
  deptId?: number;
  /**
   *
   * - Format: int32
   */
  divisionId?: number;
  /**
   *
   * - Format: int32
   */
  id?: number;
  /**
   *
   * - Format: int32
   */
  level?: number;
  nodes?: RegionTreeNodeModel[];
  /**
   *
   * - Format: int32
   */
  regionId?: number;
  /**
   *
   * - Format: int32
   */
  retailId?: number;
  title?: string;
  treeItemType?: RegionTreeItemType;
}

export interface StatusModel {
  /**
   *
   * - Format: int32
   */
  id?: number;
  title?: string;
}

export interface SubTaskItemModel {
  canComplete?: boolean;
  canDelete?: boolean;
  canModifyDateFinish?: boolean;
  canModifyExecutor?: boolean;
  canModifyTitle?: boolean;
  canModifyUnits?: boolean;
  /**
   *
   * - Format: date-time
   */
  dateFinish?: string;
  executor?: EmployeeModel;
  /**
   *
   * - Format: int32
   */
  id?: number;
  /**
   *
   * - Format: int32
   */
  parentId?: number;
  status?: StatusModel;
  /**
   *
   * - Format: int32
   */
  subSort?: number;
  title?: string;
  /**
   *
   * - Format: int32
   */
  units?: number;
}

export interface TaskCommentModel {
  canDelete?: boolean;
  comment?: string;
  /**
   *
   * - Format: date-time
   */
  dateCreated?: string;
  employee?: EmployeeModel;
  /**
   *
   * - Format: int32
   */
  id?: number;
  /**
   *
   * - Format: int32
   */
  parentId?: number;
}

export interface TaskFileModel {
  canDelete?: boolean;
  creator?: EmployeeModel;
  /**
   *
   * - Format: date-time
   */
  dateCreated?: string;
  fileName?: string;
  /**
   *
   * - Format: int32
   */
  id?: number;
}

export interface TaskListItemModel {
  allowedStatuses?: StatusModel[];
  canComplete?: boolean;
  canDelete?: boolean;
  canFinish?: boolean;
  creatorName?: string;
  /**
   *
   * - Format: date-time
   */
  dateFinish?: string;
  /**
   *
   * - Format: date-time
   */
  dateStart?: string;
  executorName?: string;
  hasSubTasks?: boolean;
  /**
   *
   * - Format: int32
   */
  id?: number;
  isOverdue?: boolean;
  isTarget?: boolean;
  /**
   *
   * - Format: int32
   */
  orgHierId?: number;
  orgHierTitle?: string;
  status?: string;
  title?: string;
  /**
   *
   * - Format: int32
   */
  units?: number;
}

export interface TaskListItemRightsResponse {
  allowedStatuses?: StatusModel[];
  canDelete?: boolean;
}

export interface TaskModel {
  adaptationEmpoyee?: string;
  allowedStatuses?: StatusModel[];
  canAddComment?: boolean;
  canAddFile?: boolean;
  canDelete?: boolean;
  canModifyCoExecutor?: boolean;
  canModifyControl?: boolean;
  canModifyDateFinish?: boolean;
  canModifyDateStart?: boolean;
  canModifyDescription?: boolean;
  canModifyExecutor?: boolean;
  canModifyObserver?: boolean;
  canModifyTitle?: boolean;
  canModifyUnits?: boolean;
  coExecutors?: EmployeeModel[];
  creator?: EmployeeModel;
  /**
   *
   * - Format: date-time
   */
  dateCreated?: string;
  /**
   *
   * - Format: date-time
   */
  dateFactFinish?: string;
  /**
   *
   * - Format: date-time
   */
  dateFinish?: string;
  /**
   *
   * - Format: date-time
   */
  dateStart?: string;
  description?: string;
  executor?: EmployeeModel;
  /**
   *
   * - Format: int32
   */
  id?: number;
  isAdaptation?: boolean;
  isControl?: boolean;
  isTarget?: boolean;
  observers?: EmployeeModel[];
  /**
   *
   * - Format: int32
   */
  originAdditionallyEntityId?: number;
  /**
   *
   * - Format: int32
   */
  originEntityId?: number;
  originEntityTitle?: string;
  /**
   *
   * - Format: int32
   */
  originId?: number;
  /**
   *
   * - Format: int32
   */
  parentId?: number;
  parentTitle?: string;
  status?: StatusModel;
  subTasks?: SubTaskItemModel[];
  title?: string;
  /**
   *
   * - Format: int32
   */
  units?: number;
}
