import { type ComponentPropsWithRef } from 'react'
import type { JSCoreGuide } from '../../shared/docs'
import styles from './card.module.css'

type CardProps = {
    data: JSCoreGuide
} & ComponentPropsWithRef<'div'>

export const Card = ({data}: CardProps) => {
    return (
        <article className={styles.card}>
            <header className={styles['card-header']}>
                <div className={styles['card-name']}>
                    <p>{data.name}</p>
                </div>
                <div className={styles['card-category']}>
                    <p>{data.category}</p>
                </div>
                <div className={styles['card-cat-name']}>
                    <p>#{data.categoryName}</p>
                </div>
            </header>
            <div className={styles['card-description']}>
                <div>
                    <p>{data.description}</p>
                    <p>{data.accessData}</p>
                </div>
            </div>
            <div className={styles['card-code-example']}>
                <pre>{data.codeExample}</pre>
            </div>
            <footer>
                <div></div>
            </footer>
        </article>
    )
}