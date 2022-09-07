import React from 'react'
import styled from 'styled-components'

const TestBanner = styled.div
    `
color: blue;
font-size: 30em;
    `

export default function Test() {
  return (
    <TestBanner>Test</TestBanner>
  )
}
