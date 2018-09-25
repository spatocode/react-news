import React from 'react'
import _Home from './Home'
import Template from './Template'
import _Business from './Business'
import _Sports from './Sports'
import _Science from './Science'
import _Politics from './Politics'
import _Technology from './Technology'
import Whoops from './404'

export const Home = () =>
    <Template>
      <_Home />
    </Template>

export const Technology = () =>
    <Template>
        <_Technology />
    </Template>

export const Science = () =>
    <Template>
        <_Science />
    </Template>

export const Politics = () =>
    <Template>
        <_Politics />
    </Template>

export const Sports = () =>
    <Template>
        <_Sports />
    </Template>

export const Business = () =>
    <Template>
        <_Business />
    </Template>

export const NotFound = () =>
    <Whoops />