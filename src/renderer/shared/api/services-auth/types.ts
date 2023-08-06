//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface AuthRequestAuthentication {
  /**
   *
   * Идентификатор устройства
   * - minLength: 1
   */
  deviceId: string;
  /**
   *
   * Логин
   * - minLength: 1
   */
  login: string;
  /**
   *
   * Пароль
   * - minLength: 1
   */
  password: string;
}

export interface AuthRequestRefresh {
  /**
   *
   * Логин
   * - minLength: 1
   */
  accessToken: string;
  /**
   *
   * Пароль
   * - minLength: 1
   */
  refreshToken: string;
}

export interface AuthResponseEmployeeInformation {
  /**
   *
   * Бонусные карты
   */
  cards?: AuthResponseEmployeeInformationBonusCard[];
  /**
   *
   * Мобильный телефон
   */
  cellular?: string;
  /**
   *
   * Guid подразделения
   * - Format: uuid
   */
  departmentGuid?: string;
  /**
   *
   * Наименование подразделения
   */
  departmentTitle?: string;
  /**
   *
   * Guid дивизиона
   * - Format: uuid
   */
  divisionGuid?: string;
  /**
   *
   * Наименование дивизиона
   */
  divisionTitle?: string;
  /**
   *
   * Email
   */
  email?: string;
  /**
   *
   * Guid сотрудника
   * - Format: uuid
   */
  employeeGuid?: string;
  /**
   *
   * Id сотрудника
   * - Format: int32
   */
  employeeId?: number;
  /**
   *
   * Имя
   */
  firstName?: string;
  /**
   *
   * Фамилия
   */
  lastName?: string;
  /**
   *
   * Отчество
   */
  middleName?: string;
  organizationHierarchy?: AuthResponseEmployeeInformationOrganization;
  /**
   *
   * Рабочий телефон
   */
  phone?: string;
  /**
   *
   * Guid должности
   * - Format: uuid
   */
  positionGuid?: string;
  /**
   *
   * Краткое наименование должности
   */
  positionShortTitle?: string;
  /**
   *
   * Наименование должности
   */
  positionTitle?: string;
  /**
   *
   * Guid торговой точки
   * - Format: uuid
   */
  retailGuid?: string;
  /**
   *
   * Наименование торговой точки
   */
  retailTitle?: string;
  /**
   *
   * Guid типа торговой точки
   * - Format: uuid
   */
  retailTypeGuid?: string;
  /**
   *
   * Наименование типа торговой точки
   */
  retailTypeTitle?: string;
  /**
   *
   * Guid пользователя
   * - Format: uuid
   */
  userGuid?: string;
  /**
   *
   * Id пользователя
   * - Format: int32
   */
  userId?: number;
}

export interface AuthResponseEmployeeInformationBonusCard {
  /**
   *
   * Штрихкод карты
   * - Format: int64
   */
  barcode?: number;
  /**
   *
   * Текущий баланс
   * - Format: double
   */
  currentBalance?: number;
  /**
   *
   * Guid карты
   * - Format: uuid
   */
  guid?: string;
}

export interface AuthResponseEmployeeInformationOrganization {
  /**
   *
   * Имя сотрудника
   */
  employeeFirstName?: string;
  /**
   *
   * Guid сотрудника
   * - Format: uuid
   */
  employeeGuid?: string;
  /**
   *
   * Фамилия сотрудника
   */
  employeeLastName?: string;
  /**
   *
   * Отчество сотрудника
   */
  employeeMiddleName?: string;
  /**
   *
   * Guid
   * - Format: uuid
   */
  guid?: string;
  node?: AuthResponseEmployeeInformationOrganization;
  /**
   *
   * Guid родителя
   * - Format: uuid
   */
  parentGuid?: string;
  /**
   *
   * Guid должности
   * - Format: uuid
   */
  positionGuid?: string;
  /**
   *
   * Краткое наименование должности
   */
  positionShortTitle?: string;
  /**
   *
   * Наименование должности
   */
  positionTitle?: string;
  /**
   *
   * Guid структурного подразделения
   * - Format: uuid
   */
  structGuid?: string;
  /**
   *
   * Наименование структурного подразделения
   */
  structTitle?: string;
}

export interface CoreResponseAuthentication {
  /**
   *
   * Access Token
   */
  accessToken?: string;
  /**
   *
   * Refresh Token
   */
  refreshToken?: string;
}

export interface CoreResponseError {
  /**
   *
   * Код ошибки
   * - Format: int32
   */
  code?: number;
  /**
   *
   * Сообщение
   */
  message?: string;
}
