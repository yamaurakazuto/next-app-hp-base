import Link from "next/link"
import { paths } from "./data"
import styles from "./style.css"

/**
 * This is routing button of Top page.
 */
export const LinkBtn = () => {
    return (
        <div className={styles.linkBox}>
            {paths.map((item, index) => (
                <div key={index}>
                    <Link href={item.path}>
                        <button className={styles.button}>{item.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
