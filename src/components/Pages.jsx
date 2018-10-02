import React from 'react'
import { Home } from '../containers'
import Template from './Template'
import Business from './Business'
import Sports from './Sports'
import Science from './Science'
import Politics from './Politics'
import Technology from './Technology'
import Whoops from './404'

export const HomePage = () =>
    <Template>
      <Home />
    </Template>

export const TechPage = () =>
    <Template>
        <Technology />
    </Template>

export const SciPage = () =>
    <Template>
        <Science />
    </Template>

export const PoliticsPage = () =>
    <Template>
        <Politics />
    </Template>

export const SportsPage = () =>
    <Template>
        <Sports />
    </Template>

export const BusinessPage = () =>
    <Template>
        <Business />
    </Template>

export const NotFoundPage = () =>
    <Whoops />