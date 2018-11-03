import React from 'react'
import Template from './Template'
import { Home, Science, Politics, Technology, Sports, Business } from '../containers'
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