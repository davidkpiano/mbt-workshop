import React from 'react';
import Feedback from './App';
import { Machine } from 'xstate';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { assert } from 'chai';
import { createModel } from '../../xstate/packages/xstate-test/lib';

// Write your integration tests here
