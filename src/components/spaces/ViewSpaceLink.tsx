import React from 'react'
import Link from 'next/link'
import { HasSpaceIdOrHandle, spaceUrl } from '../urls'

type Props = {
  space: HasSpaceIdOrHandle
  title?: React.ReactNode
  hint?: string
  className?: string
}

export const ViewSpaceLink = ({
  space,
  title,
  hint,
  className
}: Props) => {

  if (!space.id || !title) return null

  return <span>
    <Link href='/[spaceId]' as={spaceUrl(space)}>
      <a className={'DfBlackLink ' + className} title={hint}>{title}</a>
    </Link>
  </span>
}

export default ViewSpaceLink
