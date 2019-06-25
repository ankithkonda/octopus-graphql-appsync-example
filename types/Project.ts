/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TenantedDeploymentModes, DefaultGuidedFailureModes } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: Project
// ====================================================

export interface Project_project_VersioningStrategy_DonorPackage {
  DeploymentAction: string | null;
  PackageReference: string | null;
}

export interface Project_project_VersioningStrategy {
  Template: string | null;
  DonorPackage: Project_project_VersioningStrategy_DonorPackage | null;
  DonorPackageStepId: string | null;
}

export interface Project_project_ReleaseCreationStrategy_ReleaseCreationPackage {
  DeploymentAction: string | null;
  PackageReference: string | null;
}

export interface Project_project_ReleaseCreationStrategy {
  ChannelId: string | null;
  ReleaseCreationPackage: Project_project_ReleaseCreationStrategy_ReleaseCreationPackage | null;
}

export interface Project_project_Resources_Variables_Variables_Scope {
  Environment: (string | null)[] | null;
}

export interface Project_project_Resources_Variables_Variables {
  Id: string;
  Name: string;
  Value: string;
  Description: string | null;
  Scope: Project_project_Resources_Variables_Variables_Scope | null;
  IsEditable: boolean | null;
  Type: string | null;
  IsSensitive: boolean | null;
}

export interface Project_project_Resources_Variables {
  Version: number | null;
  Variables: Project_project_Resources_Variables_Variables[];
}

export interface Project_project_Resources {
  Logo: string | null;
  Variables: Project_project_Resources_Variables | null;
}

export interface Project_project {
  Id: string;
  Name: string;
  Description: string;
  VariableSetId: string;
  DeploymentProcessId: string;
  ClonedFromProjectId: string | null;
  DiscreteChannelRelease: boolean | null;
  IncludedLibraryVariableSetIds: string[];
  DefaultToSkipIfAlreadyInstalled: boolean | null;
  TenantedDeploymentMode: TenantedDeploymentModes;
  DefaultGuidedFailureMode: DefaultGuidedFailureModes | null;
  VersioningStrategy: Project_project_VersioningStrategy | null;
  ReleaseCreationStrategy: Project_project_ReleaseCreationStrategy | null;
  Resources: Project_project_Resources | null;
}

export interface Project {
  project: Project_project | null;
}

export interface ProjectVariables {
  id: string;
}
