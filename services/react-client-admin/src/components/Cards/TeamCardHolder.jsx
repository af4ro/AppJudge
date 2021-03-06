import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Done from '@material-ui/icons/Done';
// import { Button } from '@material-ui/core';
import QuestionForm from '../Score/QuestionForm'


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    header: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    holder: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }
});

function TeamCardHolder(props) {
    const { classes } = props;
    var teams = props.value
    //   console.log(teams)

  return (
    <div className={classes.holder}>
        <Paper  className={classes.header} elevation={0}>
            <Typography variant="h4" component="h3">Teams</Typography>
        </Paper>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>School Name</TableCell>
                        <TableCell>Information</TableCell>
                        <TableCell numeric>Scored</TableCell>
                        {/* <TableCell numeric>Max Score</TableCell> */}
                        <TableCell>Score Button</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teams.map(team => {
                    
                        // var markDone = (id) => {
                        //     // vals[id] = <Done/>
                        //     props.mainvals[id] = <Done/>
                        //     console.log("Done was called", props.mainvals, id)
                        // }
                    
                        // var setico = (id) => {
                        //     if (props.mainvals[id]){
                        //         return <Clear/>
                        //     }
                        //     else{
                        //         return <Done/>
                        //     }
                        // }

                        return (
                        <TableRow key={team.id}>
                            <TableCell component="th" scope="row">
                            {team.name}
                            </TableCell>
                            <TableCell>{team.school_name}</TableCell>
                            <TableCell>{team.info}</TableCell>
                            <TableCell numeric>{props.mainvals[team.id]}</TableCell>
                            {/* <TableCell numeric>{team.max_score}</TableCell> */}
                            <TableCell>
                                {/* <Button  size="small" variant="contained" color="primary">Score</Button> */}
                                <QuestionForm team={team} isdone={props.markDone} teamid={team.id}/>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    </div>
  );
}

TeamCardHolder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamCardHolder);
