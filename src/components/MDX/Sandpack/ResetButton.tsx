/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {IconRestart} from '../../Icon/IconRestart';
export interface ResetButtonProps {
  onReset: () => void;
}

export function ResetButton({onReset}: ResetButtonProps) {
  return (
    <button
      className="text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1"
      onClick={onReset}
      title="Sandbox'ı Sıfırla"
      type="button">
      <IconRestart className="inline ml-1 mr-1 relative" /> Sıfırla
    </button>
  );
}
