export interface ViewerDimensionType {
  dims: {
    fullWidth: number;
    fullHeight: number;
    halfWidth: number;
    halfHeight: number;
    quarterWidth: number;
    quarterHeight: number;
  };
}

export interface ComponentDimensionType {
  dims: {
    fullWidth: number;
    fullHeight: number;
    halfWidth: number;
    halfHeight: number;
    quarterWidth: number;
    quarterHeight: number;
  };
}

export interface CompatibleDimChild {
  current: {
    offsetWidth: number;
    offsetHeight: number;
  };
}

export interface DimChild<T extends CompatibleDimChild> {}
