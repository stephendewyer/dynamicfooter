import classes from './ButtonExternalLink.module.css';

const ButtonExternalLink = (props) => {
    return (
        <div className={classes.button_external_link}>
            {props.children}
        </div>
    );
};

export default ButtonExternalLink;