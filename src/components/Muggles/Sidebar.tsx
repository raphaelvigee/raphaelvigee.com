import cx from 'classnames';
import * as React from 'react';
import { Link, NavLink, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Pages } from '../../content';
import GradientLine from './Utils/GradientLine';
import Name from './Name';
import styles from './Sidebar.scss?module';
import TiltRaccoon from './TiltRaccoon';

interface MenuItemProps {
    to: string;
    children: string;
}

function MenuItem({ to, children: label }: MenuItemProps) {
    return (
        <Route path={to} exact>
            {({ match }) => (
                <NavLink to={to} className={cx(styles.item)}>
                    <span className={styles.first}>{label.substring(0, 1)}</span>
                    <span className={styles.rest}>{label.substring(1)}</span>
                    <GradientLine show={!!match} width={'60%'} />
                </NavLink>
            )}
        </Route>
    );
}

interface ISidebar extends RouteComponentProps {
    homepage: boolean;
}

interface ISSidebar {
    menu: boolean;
}

class Sidebar extends React.Component<ISidebar, ISSidebar> {
    constructor(props) {
        super(props);

        this.state = {
            menu: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    public componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                menu: false,
            });
        }
    }

    public toggleMenu() {
        this.setState((state) => ({
            menu: !state.menu,
        }));
    }

    public render() {
        const { homepage } = this.props;
        const { menu } = this.state;

        return (
            <>
                <div className={cx(styles.sidebar, homepage && styles.homepage, menu && styles.active)}>
                    <div className={cx(styles.content)}>
                        <div className={cx(styles.menuToggle)} onClick={this.toggleMenu}>
                            <div className={styles.bar2} />
                            <div className={styles.bar3} />
                            <div className={styles.bar1} />
                        </div>
                        <Name homepage={homepage} />

                        <div className={cx(styles.raccoonContainer)}>
                            <Link to={'/'}>
                                <TiltRaccoon />
                            </Link>
                        </div>

                        <div className={styles.social}>
                            <a href="http://github.com/raphaelvigee" target={'_blank'} rel={'noreferrer'}>
                                <span className={cx('icon', 'icon-github')} />
                            </a>
                            <a
                                href="http://stackoverflow.com/users/3212099/rapha%C3%ABl-vig%C3%A9e"
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                <span className={cx('icon', 'icon-stack-overflow')} />
                            </a>
                            <a href="http://linkedin.com/in/raphaelvigee" target={'_blank'} rel={'noreferrer'}>
                                <span className={cx('icon', 'icon-linkedin-square')} />
                            </a>
                        </div>

                        <div className={styles.bounce}>
                            <div className={styles.arrow} />
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.container}>
                            <MenuItem to={'/'}>Home</MenuItem>
                            {Pages.map((p) => (
                                <MenuItem key={p.path} to={`/${p.path}`}>
                                    {p.name}
                                </MenuItem>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx(styles.sidebarSpacer, homepage && styles.homepage)} />
            </>
        );
    }
}

export default withRouter(Sidebar);
