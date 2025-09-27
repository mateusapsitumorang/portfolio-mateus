
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './style.css'
import Contact from './contact';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import RelatedProject from './related';


const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2, description, location, duration, completion, ourapproach, programminglanguague, framework, database, library, platform }) => {

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <i className="fa fa-close"></i>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={onClose}>

                </DialogTitle>
                <Grid className="modalBody modal-body project-modal">
                    <div className="wpo-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-project-single-wrap">
                                        <div className="wpo-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="wpo-project-single-title">
                                                        <h3>{title} Project</h3>
                                                    </div>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="wpo-project-single-content-des-right">
                                                        <ul>
                                                            <li>Location<span>: {location}</span></li>
                                                            <li>Duration<span>: {duration}</span></li>
                                                            <li>Completion <span>: {completion}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpo-project-single-main-img">
                                                <ReactFancyBox
                                                    thumbnail={pImg}
                                                    image={pImg}
                                                />
                                            </div>
                                        </div>
                                        <div className="wpo-project-single-item">
                                            <div className="wpo-project-single-title">
                                                <h3>Our approach</h3>
                                            </div>
                                            <p>{ourapproach}</p>
                                        </div>
                                        <div className="wpo-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="wpo-project-single-title">
                                                        <h3>Tools & Technologies</h3>
                                                    </div>
                                                    <ul>
                                                        <li>{programminglanguague}</li>
                                                        <li>{framework}</li>
                                                        <li>{database}</li>
                                                        <li>{library}</li>
                                                        <li>{platform}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <RelatedProject />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ProjectSingle;

