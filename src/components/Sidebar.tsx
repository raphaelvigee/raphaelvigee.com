import cx from 'classnames';
import * as React from 'react';
import {Link, NavLink, Route, RouteComponentProps, withRouter} from 'react-router-dom';
import GradientLine from './GradientLine';
import Name from './Name';
import * as styles from './Sidebar.scss';
import TiltRaccoon from './TiltRaccoon';

function MenuItem({to, children: label}) {
    return (
        <Route path={to} exact children={({match}) => (
            <NavLink to={to} className={cx(styles.item)}>
                <span className={styles.first}>
                    {label.substring(0, 1)}
                </span>
                <span className={styles.rest}>
                    {label.substring(1)}
                </span>
                <GradientLine show={!!match} width={'60%'}/>
            </NavLink>
        )}/>
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
        const {homepage} = this.props;
        const {menu} = this.state;

        return (
            <React.Fragment>
                <div className={cx(styles.sidebar, homepage && styles.homepage, menu && styles.active)}>
                    <div className={cx(styles.content)}>
                        <div className={cx(styles.menuToggle)}
                             onClick={this.toggleMenu}>
                            <div className={styles.bar2}/>
                            <div className={styles.bar3}/>
                            <div className={styles.bar1}/>
                        </div>
                        <Name homepage={homepage}/>

                        <div className={cx(styles.raccoonContainer)}>
                            <Link to={'/contact'}>
                                <TiltRaccoon/>
                            </Link>
                            <Link to={'/contact'} className={styles.label}>
                                Contact
                            </Link>
                        </div>

                        <div className={styles.social}>
                            <a href='http://github.com/raphaelvigee' target={'_blank'}>
                                <span className={cx(styles.icon, styles['icon-github'])}/>
                            </a>
                            <a href='http://stackoverflow.com/users/3212099/rapha%C3%ABl-vig%C3%A9e' target={'_blank'}>
                                <span className={cx(styles.icon, styles['icon-stack-overflow'])}/>
                            </a>
                            <a href='http://linkedin.com/in/raphaelvigee' target={'_blank'}>
                                <span className={cx(styles.icon, styles['icon-linkedin-square'])}/>
                            </a>
                        </div>

                        <div className={styles.bounce}>
                            <div className={styles.arrow} />
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.container}>
                            <MenuItem to={'/'}>Home</MenuItem>
                            <MenuItem to={'/education'}>Education</MenuItem>
                            <MenuItem to={'/hacks'}>Hacks</MenuItem>
                            <MenuItem to={'/experiences'}>Experiences</MenuItem>
                            <MenuItem to={'/resume'}>Résumé</MenuItem>
                            <MenuItem to={'/contact'}>Contact</MenuItem>
                        </div>
                    </div>
                </div>
                <div className={cx(styles.sidebarSpacer, homepage && styles.homepage)}/>
            </React.Fragment>
        );
    }
}

export default withRouter(Sidebar);
