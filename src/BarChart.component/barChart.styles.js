
import * as COLORS from './../colors'
export default `
.chart-container {
    background: ${COLORS.darkBlue};
    padding: 35px 70px;
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 30px auto;
    position: relative
}
.chart-label {
    margin: 0;
    height: 25px;
    margin-bottom: 25px;
    color: white;
    text-align: center;
}
.chart-legend {
    position: absolute;
    left: 50px;
    border-left: 1px solid ${COLORS.lightGrey};
    border-bottom: 1px solid ${COLORS.lightGrey};
    box-sizing: border-box;
}
.legend-line {
    border-top: 1px dashed ${COLORS.lightGrey};
    width: 100%;
    display: flex;
    box-sizing: border-box;
}
.legend-label {
    font-size: 12px;
    color: ${COLORS.lightGrey};
    text-align: right;
    margin-left: -35px;
    width: 25px;
    padding-right: 10px;
    margin-top: -8px;
}
.bar {
    background: ${COLORS.blueBar};
    display: inline-block;
    position: relative;
    box-sizing: border-box;
}
.bar:last-child {
    margin-right: 0 !important;
}
.bar .bar-value {
    text-align: center;
    width: 100%;
    display: inline-block;
    padding: 10px 0;
    position: absolute;
    color: white;
    font-weight: bold;
}
.bar .bar-label{
    position: absolute;
    bottom: -25px;
    font-size: 12px;
    text-align: center;
    width: calc(100% + 12px);
    color: ${COLORS.lightGrey};
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    left: -6px;
}`