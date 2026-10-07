import { type ComponentPropsWithRef } from 'react'
import type { JSCoreGuide } from '../../shared/docs'
import styles from './card.module.css'

type CardProps = {
    data: JSCoreGuide
} & ComponentPropsWithRef<'div'>

export const Card = ({data}: CardProps) => {
    return (
        <div className={styles.card}>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}