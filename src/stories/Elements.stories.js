import React, { Fragment } from 'react'
import styled from 'styled-components'

import { 
  centerDecorator, 
  columnDecorator 
} from '../../.storybook/decorator'
import { Code } from '../index'

export default {
  title: 'Examples/Semantic Elements',
  decorators: [centerDecorator],
}

export const Paragraph = () => (
  <Fragment>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
    <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
  </Fragment>
)

const SpacedDivs = styled.div`
  & > div {
    margin-bottom: 0.5rem;
  }
`

export const SematicTextElements = () => (
  <SpacedDivs>
    <div>
      <abbr title="Internationalization">I18N</abbr>
      <Code text="abbr"></Code>
    </div>
    <div>
      <cite>Citation</cite>
      <Code text="cite"></Code>
    </div>
    <div>
      <del>Deleted</del>
      <Code text="del" />
    </div>
    <div>
      <i>Italic</i>
      <Code text="i" />
    </div>
    <div>
      <ruby>Ruby</ruby>
      <Code text="ruby" />
    </div>
    <div>
      <samp>Sample</samp>
      <Code text="samp" />
    </div>
    <div>
      <span>Text <sup>Superscripted</sup></span>
      <Code text="sup" />
    </div>
    <div>
      <u>Underline</u>
      <Code text="u" />
    </div>
    <div>
      <b>Bold</b>
      <Code text="b" />
      <strong>Strong</strong>
      <Code text="strong" />
    </div>
    <div>
      <em>Emphasis</em>
      <Code text="em" />
    </div>
    <div>
      <ins>Inserted</ins>
      <Code text="ins" />
    </div>
    <div>
      <mark>Highlighted</mark>
      <Code text="mark" />
    </div>
    <div>
      <s>Strikethrough</s>
      <Code text="s" />
    </div>
    <div>
      <span>Text <sub>Subscripted</sub></span>
      <Code text="sub" />
    </div>
    <div>
      <time>20:00</time>
      <Code text="time" />
    </div>
    <div>
      <var>x=y+2</var>
      <Code text="var" />
    </div>
  </SpacedDivs>
)
SematicTextElements.decorators = [columnDecorator]

export const Blockquote = () => (
  <blockquote>
    <p>The advance of technology is based on making it fit in so that you don&#39t really even notice it, so it&#39s part of everyday life. </p>
    <cite>- Bill Gates</cite>
  </blockquote>
)

export const UnOrderedList = () => (
  <ul>
    <li>list item 1</li>
    <li>list item 2
      <ul>
        <li>list item 2.1</li>
        <li>list item 2.2</li>
        <li>list item 2.3</li>
      </ul>
    </li>
    <li>list item 3</li>
  </ul>
)

export const OrderedList = () => (
  <ol>
    <li>list item 1</li>
    <li>list item 2
      <ol>
        <li>list item 2.1</li>
        <li>list item 2.2</li>
        <li>list item 2.3</li>
      </ol>
    </li>
    <li>list item 3</li>
  </ol>
)

export const DescriptionList = () => (
  <dl>
    <dt>description list term 1</dt>
    <dd>description list description 1</dd>
    <dt>description list term 2</dt>
    <dd>description list description 2</dd>
    <dt>description list term 3</dt>
    <dd>description list description 3</dd>
  </dl>
)
