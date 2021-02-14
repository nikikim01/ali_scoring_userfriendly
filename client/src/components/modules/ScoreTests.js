import React, { Component, useState } from "react";
import { parse } from "papaparse";
import './ScoreTests.css';
import { CSVLink } from "react-csv";
import moment from 'moment';



const cor_amina=[['A', 'easy'], ['B', 'target'], ['B', 'easy'], ['C', 'target'],
             ['D', 'non-book'], ['D', 'target'], ['A', 'target'], ['D', 'target'],
             ['B', 'target'], ['D', 'target'], ['C', 'target'], ['D', 'target'],
             ['A', 'target'], ['C', 'non-book']]

const cor_chasingspace = [['C', 'easy'], ['D', 'non-book'], ['A', 'target'], ['B', 'target'],
                    ['C', 'target'], ['A', 'target'], ['B', 'easy'], ['B', 'target'],
                    ['D', 'target'], ['A', 'target'], ['D', 'target'], ['A', 'non-book'],
                    ['C', 'target'], ['B', 'target']]

const cor_crenshaw = [['B', 'easy'], ['A', 'target'], ['C', 'non-book'], ['A', 'easy'],
                ['D', 'target'], ['C', 'target'], ['B', 'target'], ['D', 'non-book'],
                ['D', 'target'], ['D', 'target'], ['B', 'target'], ['A', 'target'],
                ['D', 'target'], ['C', 'target']]

const cor_frindle = [['A', 'easy'], ['B', 'target'], ['D', 'target'], ['A', 'target'],
               ['A', 'non-book'], ['B', 'target'], ['C', 'target'], ['A', 'target'],
               ['B', 'easy'], ['C', 'target'], ['D', 'target'], ['B', 'non-book'],
               ['C', 'target'], ['D', 'target']]

const cor_memphis = [['A', 'easy'], ['B', 'non-book'], ['D', 'target'], ['C', 'target'],
               ['B', 'target'], ['D', 'target'], ['C', 'target'], ['A', 'target'],
               ['D', 'target'], ['A', 'target'], ['B', 'non-book'], ['D', 'easy'],
               ['C', 'target'], ['A', 'target']]

const cor_klutz = [['A', 'easy'], ['B', 'target'], ['A', 'target'], ['C', 'target'],
             ['C', 'non-book'], ['C', 'target'], ['D', 'target'], ['B', 'easy'],
             ['C', 'target'], ['A', 'target'], ['B', 'target'], ['C', 'target'],
             ['D', 'non-book'], ['A', 'target']]

const cor_pups = [['B', 'easy'], ['C', 'target'], ['B', 'target'], ['A', 'target'],
            ['B', 'target'], ['A', 'target'], ['D', 'target'], ['C', 'target'],
            ['C', 'target'], ['A', 'easy'], ['C', 'non-book'], ['A', 'target'],
            ['D', 'non-book'], ['D', 'target']]

const cor_schom = [['C', 'easy'], ['D', 'target'], ['A', 'target'], ['B', 'non-book'],
             ['C', 'target'], ['B', 'target'], ['A', 'target'], ['A', 'target'],
             ['A', 'easy'], ['D', 'target'], ['A', 'target'], ['B', 'target'],
             ['C', 'target'], ['D', 'non-book']]

const cor_bad = [['B', 'easy'], ['A', 'target'], ['D', 'target'], ['B', 'non-book'],
           ['C', 'target'], ['A', 'target'], ['D', 'target'], ['D', 'easy'],
           ['A', 'target'], ['C', 'target'], ['B', 'target'], ['D', 'non-book'],
           ['A', 'target'], ['C', 'target']]

const cor_boyTV = [['D', 'easy'], ['D', 'target'], ['A', 'target'], ['D', 'target'],
             ['B', 'target'], ['B', 'target'], ['D', 'easy'], ['B', 'non-book'],
             ['C', 'target'], ['B', 'target'], ['B', 'target'], ['C', 'target'],
             ['A', 'target'], ['B', 'non-book']]

const cor_choco = [['C', 'easy'], ['D', 'non-book'], ['A', 'target'], ['B', 'target'],
             ['C', 'target'], ['A', 'target'], ['B', 'easy'], ['B', 'target'],
             ['D', 'target'], ['A', 'target'], ['D', 'target'], ['D', 'non-book'],
             ['C', 'target'], ['B', 'target']]

const cor_oregon = [['C', 'easy'], ['C', 'target'], ['B', 'target'], ['D', 'target'],
              ['A', 'target'], ['B', 'target'], ['A', 'non-book'], ['D', 'target'],
              ['D', 'target'], ['C', 'target'], ['B', 'non-book'], ['A', 'target'],
              ['B', 'target'], ['A', 'easy']]

const cor_freedom = [['B', 'easy'], ['D', 'target'], ['C', 'target'], ['A', 'non-book'],
               ['B', 'target'], ['A', 'target'], ['D', 'target'], ['C', 'target'],
               ['B', 'target'], ['A', 'target'], ['C', 'easy'], ['B', 'target'],
               ['D', 'target'], ['D', 'non-book']]

const cor_galileo = [['A', 'easy'], ['D', 'target'], ['C', 'target'], ['A', 'target'],
               ['D', 'target'], ['A', 'non-book'], ['C', 'target'], ['C', 'target'],
               ['A', 'target'], ['C', 'target'], ['B', 'target'], ['D', 'easy'],
               ['A', 'target'], ['B', 'non-book']]

const cor_angelou = [['C', 'easy'], ['B', 'target'], ['C', 'target'], ['A', 'non-book'],
               ['B', 'target'], ['D', 'target'], ['D', 'target'], ['C', 'target'],
               ['D', 'easy'], ['A', 'target'], ['B', 'target'], ['C', 'target'],
               ['A', 'target'], ['A', 'non-book']]

const cor_young_capn_nemo = [['B', 'easy'], ['C', 'target'], ['D', 'target'], ['A', 'target'],
                       ['B', 'non-book'], ['A', 'target'], ['C', 'target'], ['D', 'target'],
                       ['B', 'easy'], ['B', 'target'], ['A', 'target'], ['C', 'target'],
                       ['B', 'non-book'], ['C', 'target']]

const cor_we_are_the_ship = [['A', 'easy'], ['D', 'target'], ['D', 'target'], ['C', 'non-book'],
                       ['B', 'target'], ['D', 'target'], ['A', 'target'], ['B', 'target'],
                       ['D', 'target'], ['B', 'non-book'], ['C', 'target'], ['B', 'target'],
                       ['C', 'target'], ['C', 'easy']]

const cor_Bob = [['A', 'easy'], ['C', 'target'], ['B', 'non-book'], ['A', 'target'],
           ['C', 'target'], ['D', 'target'], ['A', 'target'], ['C', 'target'],
           ['D', 'target'], ['D', 'easy'], ['D', 'target'], ['D', 'target'],
           ['B', 'target'], ['B', 'non-book']]

const cor_reptile_room = [['B', 'easy'], ['C', 'target'], ['D', 'target'], ['A', 'target'],
                    ['B', 'non-book'], ['A', 'target'], ['C', 'target'], ['D', 'target'],
                    ['B', 'easy'], ['B', 'target'], ['A', 'target'], ['C', 'target'],
                    ['B', 'non-book'], ['C', 'target']]

const cor_lemonade_war = [['A', 'easy'], ['C', 'target'], ['A', 'target'], ['A', 'target'],
                    ['C', 'target'], ['C', 'target'], ['A', 'non-book'], ['C', 'non-book'],
                    ['B', 'easy'], ['D', 'target'], ['B', 'target'], ['D', 'target'],
                    ['C', 'target'], ['B', 'target']]

const all_cor = ['cor_amina', 'cor_chasingspace', 'cor_crenshaw', 'cor_frindle', 'cor_memphis',
           'cor_klutz', 'cor_pups', 'cor_schom', 'cor_bad', 'cor_boyTV', 'cor_choco',
           'cor_oregon', 'cor_freedom', 'cor_galileo', 'cor_angelou', 'cor_young_capn_nemo',
           'cor_we_are_the_ship', 'cor_Bob', 'cor_reptile_room', 'cor_lemonade_war']

var targetCount = 0;
var easyCount = 0;
var nonbookCount = 0;
var incorrectOnes = [];
var temp1 = '';
var temp2 = '';
var temp3 = '';
var temp4 = '';
var temp5 = '';
var temp6 = '';
var temp7 = '';
var temp8 = '';
var temp9 = '';
var temp10 = '';
var temp11 = '';
var temp12 = '';
var temp13 = '';
var temp14 = '';


const exportingData = [
    
];

const headers = [
    { label: "ALI ID", key: "aliID" },
    { label: "Date", key: "testDate" },
    { label: "Tester Initials", key: "testerInitials" },
    { label: "Title of Book", key: "bookTitle" },
    { label: "Pretest or Posttest?", key: "testVersion" },
    { label: "Notes", key: "receptiveNotes" },
    { label: "Receptive #1", key: "rec1" },
    { label: "Receptive #2", key: "rec2" },
    { label: "Receptive #3", key: "rec3" },
    { label: "Receptive #4", key: "rec4" },
    { label: "Receptive #5", key: "rec5" },
    { label: "Receptive #6", key: "rec6" },
    { label: "Receptive #7", key: "rec7" },
    { label: "Receptive #8", key: "rec8" },
    { label: "Receptive #9", key: "rec9" },
    { label: "Receptive #10", key: "rec10" },
    { label: "Receptive #11", key: "rec11" },
    { label: "Receptive #12", key: "rec12" },
    { label: "Receptive #13", key: "rec13" },
    { label: "Receptive #14", key: "rec14" },
    { label: "Receptive Target Raw Score", key: "targetRaw" },
    { label: "Receptive Easy Raw Score", key: "easyRaw" },
    { label: "Receptive Non-book Raw Score", key: "nonbookRaw" },
    { label: "Receptive All Raw Score", key: "allRaw" },
    { label: "Receptive Incorrect Items", key: "incorrectItems" },
    { label: "Receptive #1 Correct", key: "recCor1" },
    { label: "Receptive #2 Correct", key: "recCor2" },
    { label: "Receptive #3 Correct", key: "recCor3" },
    { label: "Receptive #4 Correct", key: "recCor4" },
    { label: "Receptive #5 Correct", key: "recCor5" },
    { label: "Receptive #6 Correct", key: "recCor6" },
    { label: "Receptive #7 Correct", key: "recCor7" },
    { label: "Receptive #8 Correct", key: "recCor8" },
    { label: "Receptive #9 Correct", key: "recCor9" },
    { label: "Receptive #10 Correct", key: "recCor10" },
    { label: "Receptive #11 Correct", key: "recCor11" },
    { label: "Receptive #12 Correct", key: "recCor12" },
    { label: "Receptive #13 Correct", key: "recCor13" },
    { label: "Receptive #14 Correct", key: "recCor14" },

];

let thisDay=moment().format("l");

const csvReport = {
    filename: `scored_On_${thisDay}.csv`,
    headers: headers,
    data: exportingData
};

export default function scoreThis() {
    const [highlightedTop, setHighlightedTop] = React.useState(false);
    const [test, setTest] = React.useState([]);
    const [inputStatus, setInputStatus] = React.useState(false);

    return (
        <div className="ScoreTests-container">
            <h2>Input Data in the form of a CSV file here:</h2>
            <div
                className={`ScoreTests-dropZone-top ${highlightedTop ? "border-green-600 bg-green-100-top" : "border-gray-600-top" }`}
                onDragEnter={()=>{
                    setHighlightedTop(true);
                }}
                onDragLeave={()=>{
                    setHighlightedTop(false);
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    setHighlightedTop(true);
                }}
                onDrop={(e)=> {
                    e.preventDefault();
                    setHighlightedTop(false);

                    Array.from(e.dataTransfer.files)
                    .filter(file => file.type === "text/csv")
                    .forEach(async (file)=> { 
                        const text = await file.text();
                        const result = parse(text, { header: true });
                        console.log(result);
                        setInputStatus(true);
                        setTest(existing => [...existing, ...result.data]);
                    });
                }}
            >
                
                DRAG AND DROP INPUT DATA HERE
            </div>

            {(inputStatus === true? <CSVLink className="u-csv" {...csvReport}>Export to CSV</CSVLink>: null)}
            
            

            <div>
            
                
            </div>
            <ul>
                {test.map((t)=> (
                    <li key={t.Timestamp}>
                        <h2 className="u-timestampColor">Timestamp <strong> : {t.Timestamp}</strong></h2>
                        <h3>Title of Book is <strong> {t.Title_of_Book}</strong></h3>
                        <h3>ALI ID: {t.ALI_ID}</h3>
                        <h3>Date tested: {t.Date}</h3>
                        <h3>Tester Initials: {t.Tester_Initials}</h3>
                        <h3>Type: {t.Pretest_or_Postest}</h3>
                        <h3>Receptive Notes: {t.Receptive_Notes}</h3>
                        <strong>Child's Receptive Answers: </strong>
                        <strong>{t.Receptive1}</strong>
                        <strong>{t.Receptive2}</strong>
                        <strong>{t.Receptive3}</strong>
                        <strong>{t.Receptive4}</strong>
                        <strong>{t.Receptive5}</strong>
                        <strong>{t.Receptive6}</strong>
                        <strong>{t.Receptive7}</strong>
                        <strong>{t.Receptive8}</strong>
                        <strong>{t.Receptive9}</strong>
                        <strong>{t.Receptive10}</strong>
                        <strong>{t.Receptive11}</strong>
                        <strong>{t.Receptive12}</strong>
                        <strong>{t.Receptive13}</strong>
                        <strong>{t.Receptive14}</strong> 
                        <br></br>
                        <br></br>
                            
                        {/* checking answers for Mr. Klutz Is Nuts */}
                            {(t.Title_of_Book === "Mr. Klutz Is Nuts")? 
                                (((t.Receptive1 === cor_klutz[0][0])? 
                                    ((<script>{cor_klutz[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(1)}</script>),
                                    ((t.Receptive2 === cor_klutz[1][0])? 
                                    (((cor_klutz[1][1]==="target")? targetCount= targetCount+1: null),
                                        ((cor_klutz[1][1]==="easy")? easyCount= easyCount+1: null),
                                        ((cor_klutz[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                        : <script>{incorrectOnes.push(2)}</script>),
                                    ((t.Receptive3 === cor_klutz[2][0])? 
                                    ((<script>{cor_klutz[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(3)}</script>),
                                    ((t.Receptive4 === cor_klutz[3][0])? 
                                    ((<script>{cor_klutz[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(4)}</script>),
                                    ((t.Receptive5 === cor_klutz[4][0])? 
                                    ((<script>{cor_klutz[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(5)}</script>),
                                    ((t.Receptive6 === cor_klutz[5][0])? 
                                    ((<script>{cor_klutz[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(6)}</script>),
                                    ((t.Receptive7 === cor_klutz[6][0])? 
                                    ((<script>{cor_klutz[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(7)}</script>),
                                    ((t.Receptive8 === cor_klutz[7][0])? 
                                    ((<script>{cor_klutz[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(8)}</script>),
                                    ((t.Receptive9 === cor_klutz[8][0])? 
                                    ((<script>{cor_klutz[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(9)}</script>),
                                    ((t.Receptive10 === cor_klutz[9][0])? 
                                    ((<script>{cor_klutz[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(10)}</script>),
                                    ((t.Receptive11=== cor_klutz[10][0])? 
                                    ((<script>{cor_klutz[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(11)}</script>),
                                    ((t.Receptive12 === cor_klutz[11][0])? 
                                    ((<script>{cor_klutz[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(12)}</script>),
                                    ((t.Receptive13 === cor_klutz[12][0])? 
                                    ((<script>{cor_klutz[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(13)}</script>),
                                    ((t.Receptive14 === cor_klutz[13][0])? 
                                    ((<script>{cor_klutz[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_klutz[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_klutz[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(14)}</script>,
                                        (<script>{temp1=cor_klutz[0][0]}</script>),
                                        (<script>{temp2=cor_klutz[1][0]}</script>),
                                        (<script>{temp3=cor_klutz[2][0]}</script>),
                                        (<script>{temp4=cor_klutz[3][0]}</script>),
                                        (<script>{temp5=cor_klutz[4][0]}</script>),
                                        (<script>{temp6=cor_klutz[5][0]}</script>),
                                        (<script>{temp7=cor_klutz[6][0]}</script>),
                                        (<script>{temp8=cor_klutz[7][0]}</script>),
                                        (<script>{temp9=cor_klutz[8][0]}</script>),
                                        (<script>{temp10=cor_klutz[9][0]}</script>),
                                        (<script>{temp11=cor_klutz[10][0]}</script>),
                                        (<script>{temp12=cor_klutz[11][0]}</script>),
                                        (<script>{temp13=cor_klutz[12][0]}</script>),
                                        (<script>{temp14=cor_klutz[13][0]}</script>)))
                                            : null}


                        {/* checking answers for Voice of Freedom : Fannie Lou Hamer, Spirit of the Civil Rights Movement */}
                            {(t.Title_of_Book === "Voice of Freedom : Fannie Lou Hamer, Spirit of the Civil Rights Movement")? 
                            (((t.Receptive1 === cor_freedom[0][0])? 
                                ((<script>{cor_freedom[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_freedom[1][0])? 
                                (((cor_freedom[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_freedom[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_freedom[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_freedom[2][0])? 
                                ((<script>{cor_freedom[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_freedom[3][0])? 
                                ((<script>{cor_freedom[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_freedom[4][0])? 
                                ((<script>{cor_freedom[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_freedom[5][0])? 
                                ((<script>{cor_freedom[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_freedom[6][0])? 
                                ((<script>{cor_freedom[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_freedom[7][0])? 
                                ((<script>{cor_freedom[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_freedom[8][0])? 
                                ((<script>{cor_freedom[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_freedom[9][0])? 
                                ((<script>{cor_freedom[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_freedom[10][0])? 
                                ((<script>{cor_freedom[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_freedom[11][0])? 
                                ((<script>{cor_freedom[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_freedom[12][0])? 
                                ((<script>{cor_freedom[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_freedom[13][0])? 
                                ((<script>{cor_freedom[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_freedom[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_freedom[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_freedom[0][0]}</script>),
                                    (<script>{temp2=cor_freedom[1][0]}</script>),
                                    (<script>{temp3=cor_freedom[2][0]}</script>),
                                    (<script>{temp4=cor_freedom[3][0]}</script>),
                                    (<script>{temp5=cor_freedom[4][0]}</script>),
                                    (<script>{temp6=cor_freedom[5][0]}</script>),
                                    (<script>{temp7=cor_freedom[6][0]}</script>),
                                    (<script>{temp8=cor_freedom[7][0]}</script>),
                                    (<script>{temp9=cor_freedom[8][0]}</script>),
                                    (<script>{temp10=cor_freedom[9][0]}</script>),
                                    (<script>{temp11=cor_freedom[10][0]}</script>),
                                    (<script>{temp12=cor_freedom[11][0]}</script>),
                                    (<script>{temp13=cor_freedom[12][0]}</script>),
                                    (<script>{temp14=cor_freedom[13][0]}</script>)))
                                        : null}

                            {/* checking answers for We Are The Ship : The Story of Negro League Baseball */}
                            {(t.Title_of_Book === "We Are The Ship : The Story of Negro League Baseball")? 
                            (((t.Receptive1 === cor_we_are_the_ship[0][0])? 
                                ((<script>{cor_we_are_the_ship[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_we_are_the_ship[1][0])? 
                                (((cor_we_are_the_ship[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_we_are_the_ship[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_we_are_the_ship[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_we_are_the_ship[2][0])? 
                                ((<script>{cor_we_are_the_ship[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_we_are_the_ship[3][0])? 
                                ((<script>{cor_we_are_the_ship[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_we_are_the_ship[4][0])? 
                                ((<script>{cor_we_are_the_ship[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_we_are_the_ship[5][0])? 
                                ((<script>{cor_we_are_the_ship[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_we_are_the_ship[6][0])? 
                                ((<script>{cor_we_are_the_ship[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_we_are_the_ship[7][0])? 
                                ((<script>{cor_we_are_the_ship[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_we_are_the_ship[8][0])? 
                                ((<script>{cor_we_are_the_ship[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_we_are_the_ship[9][0])? 
                                ((<script>{cor_we_are_the_ship[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_we_are_the_ship[10][0])? 
                                ((<script>{cor_we_are_the_ship[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_we_are_the_ship[11][0])? 
                                ((<script>{cor_we_are_the_ship[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_we_are_the_ship[12][0])? 
                                ((<script>{cor_we_are_the_ship[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_we_are_the_ship[13][0])? 
                                ((<script>{cor_we_are_the_ship[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_we_are_the_ship[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_we_are_the_ship[0][0]}</script>),
                                    (<script>{temp2=cor_we_are_the_ship[1][0]}</script>),
                                    (<script>{temp3=cor_we_are_the_ship[2][0]}</script>),
                                    (<script>{temp4=cor_we_are_the_ship[3][0]}</script>),
                                    (<script>{temp5=cor_we_are_the_ship[4][0]}</script>),
                                    (<script>{temp6=cor_we_are_the_ship[5][0]}</script>),
                                    (<script>{temp7=cor_we_are_the_ship[6][0]}</script>),
                                    (<script>{temp8=cor_we_are_the_ship[7][0]}</script>),
                                    (<script>{temp9=cor_we_are_the_ship[8][0]}</script>),
                                    (<script>{temp10=cor_we_are_the_ship[9][0]}</script>),
                                    (<script>{temp11=cor_we_are_the_ship[10][0]}</script>),
                                    (<script>{temp12=cor_we_are_the_ship[11][0]}</script>),
                                    (<script>{temp13=cor_we_are_the_ship[12][0]}</script>),
                                    (<script>{temp14=cor_we_are_the_ship[13][0]}</script>)))
                                        : null}

                    {/* checking answers for Bob */}
                        {(t.Title_of_Book === "Bob")? 
                        (((t.Receptive1 === cor_Bob[0][0])? 
                            ((<script>{cor_Bob[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(1)}</script>),
                            ((t.Receptive2 === cor_Bob[1][0])? 
                            (((cor_Bob[1][1]==="target")? targetCount= targetCount+1: null),
                                ((cor_Bob[1][1]==="easy")? easyCount= easyCount+1: null),
                                ((cor_Bob[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                : <script>{incorrectOnes.push(2)}</script>),
                            ((t.Receptive3 === cor_Bob[2][0])? 
                            ((<script>{cor_Bob[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(3)}</script>),
                            ((t.Receptive4 === cor_Bob[3][0])? 
                            ((<script>{cor_Bob[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(4)}</script>),
                            ((t.Receptive5 === cor_Bob[4][0])? 
                            ((<script>{cor_Bob[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(5)}</script>),
                            ((t.Receptive6 === cor_Bob[5][0])? 
                            ((<script>{cor_Bob[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(6)}</script>),
                            ((t.Receptive7 === cor_Bob[6][0])? 
                            ((<script>{cor_Bob[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(7)}</script>),
                            ((t.Receptive8 === cor_Bob[7][0])? 
                            ((<script>{cor_Bob[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(8)}</script>),
                            ((t.Receptive9 === cor_Bob[8][0])? 
                            ((<script>{cor_Bob[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(9)}</script>),
                            ((t.Receptive10 === cor_Bob[9][0])? 
                            ((<script>{cor_Bob[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(10)}</script>),
                            ((t.Receptive11=== cor_Bob[10][0])? 
                            ((<script>{cor_Bob[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(11)}</script>),
                            ((t.Receptive12 === cor_Bob[11][0])? 
                            ((<script>{cor_Bob[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(12)}</script>),
                            ((t.Receptive13 === cor_Bob[12][0])? 
                            ((<script>{cor_Bob[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(13)}</script>),
                            ((t.Receptive14 === cor_Bob[13][0])? 
                            ((<script>{cor_Bob[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_Bob[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_Bob[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(14)}</script>,
                                (<script>{temp1=cor_Bob[0][0]}</script>),
                                (<script>{temp2=cor_Bob[1][0]}</script>),
                                (<script>{temp3=cor_Bob[2][0]}</script>),
                                (<script>{temp4=cor_Bob[3][0]}</script>),
                                (<script>{temp5=cor_Bob[4][0]}</script>),
                                (<script>{temp6=cor_Bob[5][0]}</script>),
                                (<script>{temp7=cor_Bob[6][0]}</script>),
                                (<script>{temp8=cor_Bob[7][0]}</script>),
                                (<script>{temp9=cor_Bob[8][0]}</script>),
                                (<script>{temp10=cor_Bob[9][0]}</script>),
                                (<script>{temp11=cor_Bob[10][0]}</script>),
                                (<script>{temp12=cor_Bob[11][0]}</script>),
                                (<script>{temp13=cor_Bob[12][0]}</script>),
                                (<script>{temp14=cor_Bob[13][0]}</script>)))
                                    : null}

                            {/* checking answers for The Bad Beginning */}
                                {(t.Title_of_Book === "The Bad Beginning")? 
                                (((t.Receptive1 === cor_bad[0][0])? 
                                    ((<script>{cor_bad[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(1)}</script>),
                                    ((t.Receptive2 === cor_bad[1][0])? 
                                    (((cor_bad[1][1]==="target")? targetCount= targetCount+1: null),
                                        ((cor_bad[1][1]==="easy")? easyCount= easyCount+1: null),
                                        ((cor_bad[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                        : <script>{incorrectOnes.push(2)}</script>),
                                    ((t.Receptive3 === cor_bad[2][0])? 
                                    ((<script>{cor_bad[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(3)}</script>),
                                    ((t.Receptive4 === cor_bad[3][0])? 
                                    ((<script>{cor_bad[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(4)}</script>),
                                    ((t.Receptive5 === cor_bad[4][0])? 
                                    ((<script>{cor_bad[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(5)}</script>),
                                    ((t.Receptive6 === cor_bad[5][0])? 
                                    ((<script>{cor_bad[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(6)}</script>),
                                    ((t.Receptive7 === cor_bad[6][0])? 
                                    ((<script>{cor_bad[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(7)}</script>),
                                    ((t.Receptive8 === cor_bad[7][0])? 
                                    ((<script>{cor_bad[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(8)}</script>),
                                    ((t.Receptive9 === cor_bad[8][0])? 
                                    ((<script>{cor_bad[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(9)}</script>),
                                    ((t.Receptive10 === cor_bad[9][0])? 
                                    ((<script>{cor_bad[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(10)}</script>),
                                    ((t.Receptive11=== cor_bad[10][0])? 
                                    ((<script>{cor_bad[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(11)}</script>),
                                    ((t.Receptive12 === cor_bad[11][0])? 
                                    ((<script>{cor_bad[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(12)}</script>),
                                    ((t.Receptive13 === cor_bad[12][0])? 
                                    ((<script>{cor_bad[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(13)}</script>),
                                    ((t.Receptive14 === cor_bad[13][0])? 
                                    ((<script>{cor_bad[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_bad[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_bad[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(14)}</script>,
                                        (<script>{temp1=cor_bad[0][0]}</script>),
                                        (<script>{temp2=cor_bad[1][0]}</script>),
                                        (<script>{temp3=cor_bad[2][0]}</script>),
                                        (<script>{temp4=cor_bad[3][0]}</script>),
                                        (<script>{temp5=cor_bad[4][0]}</script>),
                                        (<script>{temp6=cor_bad[5][0]}</script>),
                                        (<script>{temp7=cor_bad[6][0]}</script>),
                                        (<script>{temp8=cor_bad[7][0]}</script>),
                                        (<script>{temp9=cor_bad[8][0]}</script>),
                                        (<script>{temp10=cor_bad[9][0]}</script>),
                                        (<script>{temp11=cor_bad[10][0]}</script>),
                                        (<script>{temp12=cor_bad[11][0]}</script>),
                                        (<script>{temp13=cor_bad[12][0]}</script>),
                                        (<script>{temp14=cor_bad[13][0]}</script>)))
                                            : null}

                        {/* checking answers for Young Captain Nemo */}
                            {(t.Title_of_Book === "Young Captain Nemo")? 
                            (((t.Receptive1 === cor_young_capn_nemo[0][0])? 
                                ((<script>{cor_young_capn_nemo[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_young_capn_nemo[1][0])? 
                                (((cor_young_capn_nemo[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_young_capn_nemo[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_young_capn_nemo[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_young_capn_nemo[2][0])? 
                                ((<script>{cor_young_capn_nemo[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_young_capn_nemo[3][0])? 
                                ((<script>{cor_young_capn_nemo[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_young_capn_nemo[4][0])? 
                                ((<script>{cor_young_capn_nemo[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_young_capn_nemo[5][0])? 
                                ((<script>{cor_young_capn_nemo[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_young_capn_nemo[6][0])? 
                                ((<script>{cor_young_capn_nemo[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_young_capn_nemo[7][0])? 
                                ((<script>{cor_young_capn_nemo[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_young_capn_nemo[8][0])? 
                                ((<script>{cor_young_capn_nemo[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_young_capn_nemo[9][0])? 
                                ((<script>{cor_young_capn_nemo[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_young_capn_nemo[10][0])? 
                                ((<script>{cor_young_capn_nemo[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_young_capn_nemo[11][0])? 
                                ((<script>{cor_young_capn_nemo[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_young_capn_nemo[12][0])? 
                                ((<script>{cor_young_capn_nemo[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_young_capn_nemo[13][0])? 
                                ((<script>{cor_young_capn_nemo[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_young_capn_nemo[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_young_capn_nemo[0][0]}</script>),
                                    (<script>{temp2=cor_young_capn_nemo[1][0]}</script>),
                                    (<script>{temp3=cor_young_capn_nemo[2][0]}</script>),
                                    (<script>{temp4=cor_young_capn_nemo[3][0]}</script>),
                                    (<script>{temp5=cor_young_capn_nemo[4][0]}</script>),
                                    (<script>{temp6=cor_young_capn_nemo[5][0]}</script>),
                                    (<script>{temp7=cor_young_capn_nemo[6][0]}</script>),
                                    (<script>{temp8=cor_young_capn_nemo[7][0]}</script>),
                                    (<script>{temp9=cor_young_capn_nemo[8][0]}</script>),
                                    (<script>{temp10=cor_young_capn_nemo[9][0]}</script>),
                                    (<script>{temp11=cor_young_capn_nemo[10][0]}</script>),
                                    (<script>{temp12=cor_young_capn_nemo[11][0]}</script>),
                                    (<script>{temp13=cor_young_capn_nemo[12][0]}</script>),
                                    (<script>{temp14=cor_young_capn_nemo[13][0]}</script>)))
                                        : null}


                    {/* checking answers for Thirty Minutes Over Oregon */}
                        {(t.Title_of_Book === "Thirty Minutes Over Oregon")? 
                        (((t.Receptive1 === cor_oregon[0][0])? 
                            ((<script>{cor_oregon[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(1)}</script>),
                            ((t.Receptive2 === cor_oregon[1][0])? 
                            (((cor_oregon[1][1]==="target")? targetCount= targetCount+1: null),
                                ((cor_oregon[1][1]==="easy")? easyCount= easyCount+1: null),
                                ((cor_oregon[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                : <script>{incorrectOnes.push(2)}</script>),
                            ((t.Receptive3 === cor_oregon[2][0])? 
                            ((<script>{cor_oregon[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(3)}</script>),
                            ((t.Receptive4 === cor_oregon[3][0])? 
                            ((<script>{cor_oregon[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(4)}</script>),
                            ((t.Receptive5 === cor_oregon[4][0])? 
                            ((<script>{cor_oregon[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(5)}</script>),
                            ((t.Receptive6 === cor_oregon[5][0])? 
                            ((<script>{cor_oregon[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(6)}</script>),
                            ((t.Receptive7 === cor_oregon[6][0])? 
                            ((<script>{cor_oregon[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(7)}</script>),
                            ((t.Receptive8 === cor_oregon[7][0])? 
                            ((<script>{cor_oregon[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(8)}</script>),
                            ((t.Receptive9 === cor_oregon[8][0])? 
                            ((<script>{cor_oregon[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(9)}</script>),
                            ((t.Receptive10 === cor_oregon[9][0])? 
                            ((<script>{cor_oregon[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(10)}</script>),
                            ((t.Receptive11=== cor_oregon[10][0])? 
                            ((<script>{cor_oregon[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(11)}</script>),
                            ((t.Receptive12 === cor_oregon[11][0])? 
                            ((<script>{cor_oregon[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(12)}</script>),
                            ((t.Receptive13 === cor_oregon[12][0])? 
                            ((<script>{cor_oregon[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(13)}</script>),
                            ((t.Receptive14 === cor_oregon[13][0])? 
                            ((<script>{cor_oregon[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_oregon[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_oregon[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(14)}</script>,
                                (<script>{temp1=cor_oregon[0][0]}</script>),
                                (<script>{temp2=cor_oregon[1][0]}</script>),
                                (<script>{temp3=cor_oregon[2][0]}</script>),
                                (<script>{temp4=cor_oregon[3][0]}</script>),
                                (<script>{temp5=cor_oregon[4][0]}</script>),
                                (<script>{temp6=cor_oregon[5][0]}</script>),
                                (<script>{temp7=cor_oregon[6][0]}</script>),
                                (<script>{temp8=cor_oregon[7][0]}</script>),
                                (<script>{temp9=cor_oregon[8][0]}</script>),
                                (<script>{temp10=cor_oregon[9][0]}</script>),
                                (<script>{temp11=cor_oregon[10][0]}</script>),
                                (<script>{temp12=cor_oregon[11][0]}</script>),
                                (<script>{temp13=cor_oregon[12][0]}</script>),
                                (<script>{temp14=cor_oregon[13][0]}</script>)))
                                    : null}

                    {/* checking answers for The Reptile Room */}
                        {(t.Title_of_Book === "The Reptile Room")? 
                        (((t.Receptive1 === cor_reptile_room[0][0])? 
                            ((<script>{cor_reptile_room[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(1)}</script>),
                            ((t.Receptive2 === cor_reptile_room[1][0])? 
                            (((cor_reptile_room[1][1]==="target")? targetCount= targetCount+1: null),
                                ((cor_reptile_room[1][1]==="easy")? easyCount= easyCount+1: null),
                                ((cor_reptile_room[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                : <script>{incorrectOnes.push(2)}</script>),
                            ((t.Receptive3 === cor_reptile_room[2][0])? 
                            ((<script>{cor_reptile_room[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(3)}</script>),
                            ((t.Receptive4 === cor_reptile_room[3][0])? 
                            ((<script>{cor_reptile_room[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(4)}</script>),
                            ((t.Receptive5 === cor_reptile_room[4][0])? 
                            ((<script>{cor_reptile_room[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(5)}</script>),
                            ((t.Receptive6 === cor_reptile_room[5][0])? 
                            ((<script>{cor_reptile_room[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(6)}</script>),
                            ((t.Receptive7 === cor_reptile_room[6][0])? 
                            ((<script>{cor_reptile_room[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(7)}</script>),
                            ((t.Receptive8 === cor_reptile_room[7][0])? 
                            ((<script>{cor_reptile_room[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(8)}</script>),
                            ((t.Receptive9 === cor_reptile_room[8][0])? 
                            ((<script>{cor_reptile_room[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(9)}</script>),
                            ((t.Receptive10 === cor_reptile_room[9][0])? 
                            ((<script>{cor_reptile_room[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(10)}</script>),
                            ((t.Receptive11=== cor_reptile_room[10][0])? 
                            ((<script>{cor_reptile_room[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(11)}</script>),
                            ((t.Receptive12 === cor_reptile_room[11][0])? 
                            ((<script>{cor_reptile_room[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(12)}</script>),
                            ((t.Receptive13 === cor_reptile_room[12][0])? 
                            ((<script>{cor_reptile_room[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(13)}</script>),
                            ((t.Receptive14 === cor_reptile_room[13][0])? 
                            ((<script>{cor_reptile_room[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                <script>{cor_reptile_room[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                <script>{cor_reptile_room[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                : <script>{incorrectOnes.push(14)}</script>,
                                (<script>{temp1=cor_reptile_room[0][0]}</script>),
                                (<script>{temp2=cor_reptile_room[1][0]}</script>),
                                (<script>{temp3=cor_reptile_room[2][0]}</script>),
                                (<script>{temp4=cor_reptile_room[3][0]}</script>),
                                (<script>{temp5=cor_reptile_room[4][0]}</script>),
                                (<script>{temp6=cor_reptile_room[5][0]}</script>),
                                (<script>{temp7=cor_reptile_room[6][0]}</script>),
                                (<script>{temp8=cor_reptile_room[7][0]}</script>),
                                (<script>{temp9=cor_reptile_room[8][0]}</script>),
                                (<script>{temp10=cor_reptile_room[9][0]}</script>),
                                (<script>{temp11=cor_reptile_room[10][0]}</script>),
                                (<script>{temp12=cor_reptile_room[11][0]}</script>),
                                (<script>{temp13=cor_reptile_room[12][0]}</script>),
                                (<script>{temp14=cor_reptile_room[13][0]}</script>)))
                                    : null}

                        {/* checking answers for Who Was Galileo? */}
                            {(t.Title_of_Book === "Who Was Galileo?")? 
                            (((t.Receptive1 === cor_galileo[0][0])? 
                                ((<script>{cor_galileo[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_galileo[1][0])? 
                                (((cor_galileo[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_galileo[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_galileo[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_galileo[2][0])? 
                                ((<script>{cor_galileo[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_galileo[3][0])? 
                                ((<script>{cor_galileo[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_galileo[4][0])? 
                                ((<script>{cor_galileo[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_galileo[5][0])? 
                                ((<script>{cor_galileo[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_galileo[6][0])? 
                                ((<script>{cor_galileo[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_galileo[7][0])? 
                                ((<script>{cor_galileo[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_galileo[8][0])? 
                                ((<script>{cor_galileo[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_galileo[9][0])? 
                                ((<script>{cor_galileo[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_galileo[10][0])? 
                                ((<script>{cor_galileo[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_galileo[11][0])? 
                                ((<script>{cor_galileo[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_galileo[12][0])? 
                                ((<script>{cor_galileo[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_galileo[13][0])? 
                                ((<script>{cor_galileo[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_galileo[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_galileo[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_galileo[0][0]}</script>),
                                    (<script>{temp2=cor_galileo[1][0]}</script>),
                                    (<script>{temp3=cor_galileo[2][0]}</script>),
                                    (<script>{temp4=cor_galileo[3][0]}</script>),
                                    (<script>{temp5=cor_galileo[4][0]}</script>),
                                    (<script>{temp6=cor_galileo[5][0]}</script>),
                                    (<script>{temp7=cor_galileo[6][0]}</script>),
                                    (<script>{temp8=cor_galileo[7][0]}</script>),
                                    (<script>{temp9=cor_galileo[8][0]}</script>),
                                    (<script>{temp10=cor_galileo[9][0]}</script>),
                                    (<script>{temp11=cor_galileo[10][0]}</script>),
                                    (<script>{temp12=cor_galileo[11][0]}</script>),
                                    (<script>{temp13=cor_galileo[12][0]}</script>),
                                    (<script>{temp14=cor_galileo[13][0]}</script>)))
                                        : null}

                                            {/* checking answers for The Chocolate Touch */}
                            {(t.Title_of_Book === "The Chocolate Touch")? 
                                (((t.Receptive1 === cor_choco[0][0])? 
                                    ((<script>{cor_choco[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(1)}</script>),
                                    ((t.Receptive2 === cor_choco[1][0])? 
                                    (((cor_choco[1][1]==="target")? targetCount= targetCount+1: null),
                                        ((cor_choco[1][1]==="easy")? easyCount= easyCount+1: null),
                                        ((cor_choco[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                        : <script>{incorrectOnes.push(2)}</script>),
                                    ((t.Receptive3 === cor_choco[2][0])? 
                                    ((<script>{cor_choco[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(3)}</script>),
                                    ((t.Receptive4 === cor_choco[3][0])? 
                                    ((<script>{cor_choco[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(4)}</script>),
                                    ((t.Receptive5 === cor_choco[4][0])? 
                                    ((<script>{cor_choco[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(5)}</script>),
                                    ((t.Receptive6 === cor_choco[5][0])? 
                                    ((<script>{cor_choco[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(6)}</script>),
                                    ((t.Receptive7 === cor_choco[6][0])? 
                                    ((<script>{cor_choco[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(7)}</script>),
                                    ((t.Receptive8 === cor_choco[7][0])? 
                                    ((<script>{cor_choco[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(8)}</script>),
                                    ((t.Receptive9 === cor_choco[8][0])? 
                                    ((<script>{cor_choco[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(9)}</script>),
                                    ((t.Receptive10 === cor_choco[9][0])? 
                                    ((<script>{cor_choco[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(10)}</script>),
                                    ((t.Receptive11=== cor_choco[10][0])? 
                                    ((<script>{cor_choco[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(11)}</script>),
                                    ((t.Receptive12 === cor_choco[11][0])? 
                                    ((<script>{cor_choco[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(12)}</script>),
                                    ((t.Receptive13 === cor_choco[12][0])? 
                                    ((<script>{cor_choco[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(13)}</script>),
                                    ((t.Receptive14 === cor_choco[13][0])? 
                                    ((<script>{cor_choco[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_choco[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_choco[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(14)}</script>,
                                        (<script>{temp1=cor_choco[0][0]}</script>),
                                        (<script>{temp2=cor_choco[1][0]}</script>),
                                        (<script>{temp3=cor_choco[2][0]}</script>),
                                        (<script>{temp4=cor_choco[3][0]}</script>),
                                        (<script>{temp5=cor_choco[4][0]}</script>),
                                        (<script>{temp6=cor_choco[5][0]}</script>),
                                        (<script>{temp7=cor_choco[6][0]}</script>),
                                        (<script>{temp8=cor_choco[7][0]}</script>),
                                        (<script>{temp9=cor_choco[8][0]}</script>),
                                        (<script>{temp10=cor_choco[9][0]}</script>),
                                        (<script>{temp11=cor_choco[10][0]}</script>),
                                        (<script>{temp12=cor_choco[11][0]}</script>),
                                        (<script>{temp13=cor_choco[12][0]}</script>),
                                        (<script>{temp14=cor_choco[13][0]}</script>)))
                                            : null}

                            {/* checking answers for Who Was Maya Angelou? */}
                                    {(t.Title_of_Book === "Who Was Maya Angelou?")? 
                                    (((t.Receptive1 === cor_angelou[0][0])? 
                                        ((<script>{cor_angelou[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(1)}</script>),
                                        ((t.Receptive2 === cor_angelou[1][0])? 
                                        (((cor_angelou[1][1]==="target")? targetCount= targetCount+1: null),
                                            ((cor_angelou[1][1]==="easy")? easyCount= easyCount+1: null),
                                            ((cor_angelou[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                            : <script>{incorrectOnes.push(2)}</script>),
                                        ((t.Receptive3 === cor_angelou[2][0])? 
                                        ((<script>{cor_angelou[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(3)}</script>),
                                        ((t.Receptive4 === cor_angelou[3][0])? 
                                        ((<script>{cor_angelou[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(4)}</script>),
                                        ((t.Receptive5 === cor_angelou[4][0])? 
                                        ((<script>{cor_angelou[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(5)}</script>),
                                        ((t.Receptive6 === cor_angelou[5][0])? 
                                        ((<script>{cor_angelou[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(6)}</script>),
                                        ((t.Receptive7 === cor_angelou[6][0])? 
                                        ((<script>{cor_angelou[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(7)}</script>),
                                        ((t.Receptive8 === cor_angelou[7][0])? 
                                        ((<script>{cor_angelou[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(8)}</script>),
                                        ((t.Receptive9 === cor_angelou[8][0])? 
                                        ((<script>{cor_angelou[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(9)}</script>),
                                        ((t.Receptive10 === cor_angelou[9][0])? 
                                        ((<script>{cor_angelou[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(10)}</script>),
                                        ((t.Receptive11=== cor_angelou[10][0])? 
                                        ((<script>{cor_angelou[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(11)}</script>),
                                        ((t.Receptive12 === cor_angelou[11][0])? 
                                        ((<script>{cor_angelou[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(12)}</script>),
                                        ((t.Receptive13 === cor_angelou[12][0])? 
                                        ((<script>{cor_angelou[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(13)}</script>),
                                        ((t.Receptive14 === cor_angelou[13][0])? 
                                        ((<script>{cor_angelou[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_angelou[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_angelou[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(14)}</script>,
                                            (<script>{temp1=cor_angelou[0][0]}</script>),
                                            (<script>{temp2=cor_angelou[1][0]}</script>),
                                            (<script>{temp3=cor_angelou[2][0]}</script>),
                                            (<script>{temp4=cor_angelou[3][0]}</script>),
                                            (<script>{temp5=cor_angelou[4][0]}</script>),
                                            (<script>{temp6=cor_angelou[5][0]}</script>),
                                            (<script>{temp7=cor_angelou[6][0]}</script>),
                                            (<script>{temp8=cor_angelou[7][0]}</script>),
                                            (<script>{temp9=cor_angelou[8][0]}</script>),
                                            (<script>{temp10=cor_angelou[9][0]}</script>),
                                            (<script>{temp11=cor_angelou[10][0]}</script>),
                                            (<script>{temp12=cor_angelou[11][0]}</script>),
                                            (<script>{temp13=cor_angelou[12][0]}</script>),
                                            (<script>{temp14=cor_angelou[13][0]}</script>)))
                                                : null}


                        {/* checking answers for The Boy Who Invented TV : The Story of Philo Farnsworth */}
                            {(t.Title_of_Book === "The Boy Who Invented TV : The Story of Philo Farnsworth")? 
                            (((t.Receptive1 === cor_boyTV[0][0])? 
                                ((<script>{cor_boyTV[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_boyTV[1][0])? 
                                (((cor_boyTV[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_boyTV[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_boyTV[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_boyTV[2][0])? 
                                ((<script>{cor_boyTV[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_boyTV[3][0])? 
                                ((<script>{cor_boyTV[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_boyTV[4][0])? 
                                ((<script>{cor_boyTV[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_boyTV[5][0])? 
                                ((<script>{cor_boyTV[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_boyTV[6][0])? 
                                ((<script>{cor_boyTV[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_boyTV[7][0])? 
                                ((<script>{cor_boyTV[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_boyTV[8][0])? 
                                ((<script>{cor_boyTV[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_boyTV[9][0])? 
                                ((<script>{cor_boyTV[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_boyTV[10][0])? 
                                ((<script>{cor_boyTV[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_boyTV[11][0])? 
                                ((<script>{cor_boyTV[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_boyTV[12][0])? 
                                ((<script>{cor_boyTV[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_boyTV[13][0])? 
                                ((<script>{cor_boyTV[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_boyTV[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_boyTV[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_boyTV[0][0]}</script>),
                                    (<script>{temp2=cor_boyTV[1][0]}</script>),
                                    (<script>{temp3=cor_boyTV[2][0]}</script>),
                                    (<script>{temp4=cor_boyTV[3][0]}</script>),
                                    (<script>{temp5=cor_boyTV[4][0]}</script>),
                                    (<script>{temp6=cor_boyTV[5][0]}</script>),
                                    (<script>{temp7=cor_boyTV[6][0]}</script>),
                                    (<script>{temp8=cor_boyTV[7][0]}</script>),
                                    (<script>{temp9=cor_boyTV[8][0]}</script>),
                                    (<script>{temp10=cor_boyTV[9][0]}</script>),
                                    (<script>{temp11=cor_boyTV[10][0]}</script>),
                                    (<script>{temp12=cor_boyTV[11][0]}</script>),
                                    (<script>{temp13=cor_boyTV[12][0]}</script>),
                                    (<script>{temp14=cor_boyTV[13][0]}</script>)))
                                        : null}

                        {/* checking answers for Amina's Voice */}
                        {(t.Title_of_Book === "Amina's Voice")? 
                                (((t.Receptive1 === cor_amina[0][0])? 
                                    ((<script>{cor_amina[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(1)}</script>),
                                    ((t.Receptive2 === cor_amina[1][0])? 
                                    (((cor_amina[1][1]==="target")? targetCount= targetCount+1: null),
                                        ((cor_amina[1][1]==="easy")? easyCount= easyCount+1: null),
                                        ((cor_amina[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                        : <script>{incorrectOnes.push(2)}</script>),
                                    ((t.Receptive3 === cor_amina[2][0])? 
                                    ((<script>{cor_amina[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(3)}</script>),
                                    ((t.Receptive4 === cor_amina[3][0])? 
                                    ((<script>{cor_amina[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(4)}</script>),
                                    ((t.Receptive5 === cor_amina[4][0])? 
                                    ((<script>{cor_amina[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(5)}</script>),
                                    ((t.Receptive6 === cor_amina[5][0])? 
                                    ((<script>{cor_amina[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(6)}</script>),
                                    ((t.Receptive7 === cor_amina[6][0])? 
                                    ((<script>{cor_amina[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(7)}</script>),
                                    ((t.Receptive8 === cor_amina[7][0])? 
                                    ((<script>{cor_amina[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(8)}</script>),
                                    ((t.Receptive9 === cor_amina[8][0])? 
                                    ((<script>{cor_amina[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(9)}</script>),
                                    ((t.Receptive10 === cor_amina[9][0])? 
                                    ((<script>{cor_amina[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(10)}</script>),
                                    ((t.Receptive11=== cor_amina[10][0])? 
                                    ((<script>{cor_amina[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(11)}</script>),
                                    ((t.Receptive12 === cor_amina[11][0])? 
                                    ((<script>{cor_amina[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(12)}</script>),
                                    ((t.Receptive13 === cor_amina[12][0])? 
                                    ((<script>{cor_amina[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(13)}</script>),
                                    ((t.Receptive14 === cor_amina[13][0])? 
                                    ((<script>{cor_amina[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_amina[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_amina[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(14)}</script>,
                                        (<script>{temp1=cor_amina[0][0]}</script>),
                                        (<script>{temp2=cor_amina[1][0]}</script>),
                                        (<script>{temp3=cor_amina[2][0]}</script>),
                                        (<script>{temp4=cor_amina[3][0]}</script>),
                                        (<script>{temp5=cor_amina[4][0]}</script>),
                                        (<script>{temp6=cor_amina[5][0]}</script>),
                                        (<script>{temp7=cor_amina[6][0]}</script>),
                                        (<script>{temp8=cor_amina[7][0]}</script>),
                                        (<script>{temp9=cor_amina[8][0]}</script>),
                                        (<script>{temp10=cor_amina[9][0]}</script>),
                                        (<script>{temp11=cor_amina[10][0]}</script>),
                                        (<script>{temp12=cor_amina[11][0]}</script>),
                                        (<script>{temp13=cor_amina[12][0]}</script>),
                                        (<script>{temp14=cor_amina[13][0]}</script>)))
                                            : null}


                        {/* checking answers for The Lemonade War */}
                            {(t.Title_of_Book === "The Lemonade War")? 
                            (((t.Receptive1 === cor_lemonade_war[0][0])? 
                                ((<script>{cor_lemonade_war[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_lemonade_war[1][0])? 
                                (((cor_lemonade_war[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_lemonade_war[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_lemonade_war[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_lemonade_war[2][0])? 
                                ((<script>{cor_lemonade_war[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_lemonade_war[3][0])? 
                                ((<script>{cor_lemonade_war[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_lemonade_war[4][0])? 
                                ((<script>{cor_lemonade_war[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_lemonade_war[5][0])? 
                                ((<script>{cor_lemonade_war[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_lemonade_war[6][0])? 
                                ((<script>{cor_lemonade_war[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_lemonade_war[7][0])? 
                                ((<script>{cor_lemonade_war[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_lemonade_war[8][0])? 
                                ((<script>{cor_lemonade_war[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_lemonade_war[9][0])? 
                                ((<script>{cor_lemonade_war[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_lemonade_war[10][0])? 
                                ((<script>{cor_lemonade_war[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_lemonade_war[11][0])? 
                                ((<script>{cor_lemonade_war[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_lemonade_war[12][0])? 
                                ((<script>{cor_lemonade_war[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_lemonade_war[13][0])? 
                                ((<script>{cor_lemonade_war[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_lemonade_war[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_lemonade_war[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_lemonade_war[0][0]}</script>),
                                    (<script>{temp2=cor_lemonade_war[1][0]}</script>),
                                    (<script>{temp3=cor_lemonade_war[2][0]}</script>),
                                    (<script>{temp4=cor_lemonade_war[3][0]}</script>),
                                    (<script>{temp5=cor_lemonade_war[4][0]}</script>),
                                    (<script>{temp6=cor_lemonade_war[5][0]}</script>),
                                    (<script>{temp7=cor_lemonade_war[6][0]}</script>),
                                    (<script>{temp8=cor_lemonade_war[7][0]}</script>),
                                    (<script>{temp9=cor_lemonade_war[8][0]}</script>),
                                    (<script>{temp10=cor_lemonade_war[9][0]}</script>),
                                    (<script>{temp11=cor_lemonade_war[10][0]}</script>),
                                    (<script>{temp12=cor_lemonade_war[11][0]}</script>),
                                    (<script>{temp13=cor_lemonade_war[12][0]}</script>),
                                    (<script>{temp14=cor_lemonade_war[13][0]}</script>)))
                                        : null}

                                {/* checking answers for Chasing Space Young Readers' Edition */}
                                    {(t.Title_of_Book === "Chasing Space Young Readers' Edition")? 
                                    (((t.Receptive1 === cor_chasingspace[0][0])? 
                                        ((<script>{cor_chasingspace[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(1)}</script>),
                                        ((t.Receptive2 === cor_chasingspace[1][0])? 
                                        (((cor_chasingspace[1][1]==="target")? targetCount= targetCount+1: null),
                                            ((cor_chasingspace[1][1]==="easy")? easyCount= easyCount+1: null),
                                            ((cor_chasingspace[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                            : <script>{incorrectOnes.push(2)}</script>),
                                        ((t.Receptive3 === cor_chasingspace[2][0])? 
                                        ((<script>{cor_chasingspace[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(3)}</script>),
                                        ((t.Receptive4 === cor_chasingspace[3][0])? 
                                        ((<script>{cor_chasingspace[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(4)}</script>),
                                        ((t.Receptive5 === cor_chasingspace[4][0])? 
                                        ((<script>{cor_chasingspace[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(5)}</script>),
                                        ((t.Receptive6 === cor_chasingspace[5][0])? 
                                        ((<script>{cor_chasingspace[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(6)}</script>),
                                        ((t.Receptive7 === cor_chasingspace[6][0])? 
                                        ((<script>{cor_chasingspace[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(7)}</script>),
                                        ((t.Receptive8 === cor_chasingspace[7][0])? 
                                        ((<script>{cor_chasingspace[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(8)}</script>),
                                        ((t.Receptive9 === cor_chasingspace[8][0])? 
                                        ((<script>{cor_chasingspace[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(9)}</script>),
                                        ((t.Receptive10 === cor_chasingspace[9][0])? 
                                        ((<script>{cor_chasingspace[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(10)}</script>),
                                        ((t.Receptive11=== cor_chasingspace[10][0])? 
                                        ((<script>{cor_chasingspace[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(11)}</script>),
                                        ((t.Receptive12 === cor_chasingspace[11][0])? 
                                        ((<script>{cor_chasingspace[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(12)}</script>),
                                        ((t.Receptive13 === cor_chasingspace[12][0])? 
                                        ((<script>{cor_chasingspace[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(13)}</script>),
                                        ((t.Receptive14 === cor_chasingspace[13][0])? 
                                        ((<script>{cor_chasingspace[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                            <script>{cor_chasingspace[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                            <script>{cor_chasingspace[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                            : <script>{incorrectOnes.push(14)}</script>,
                                            (<script>{temp1=cor_chasingspace[0][0]}</script>),
                                            (<script>{temp2=cor_chasingspace[1][0]}</script>),
                                            (<script>{temp3=cor_chasingspace[2][0]}</script>),
                                            (<script>{temp4=cor_chasingspace[3][0]}</script>),
                                            (<script>{temp5=cor_chasingspace[4][0]}</script>),
                                            (<script>{temp6=cor_chasingspace[5][0]}</script>),
                                            (<script>{temp7=cor_chasingspace[6][0]}</script>),
                                            (<script>{temp8=cor_chasingspace[7][0]}</script>),
                                            (<script>{temp9=cor_chasingspace[8][0]}</script>),
                                            (<script>{temp10=cor_chasingspace[9][0]}</script>),
                                            (<script>{temp11=cor_chasingspace[10][0]}</script>),
                                            (<script>{temp12=cor_chasingspace[11][0]}</script>),
                                            (<script>{temp13=cor_chasingspace[12][0]}</script>),
                                            (<script>{temp14=cor_chasingspace[13][0]}</script>)))
                                                : null}
                        {/* checking answers for Crenshaw */}
                            {(t.Title_of_Book === "Crenshaw")? 
                            (((t.Receptive1 === cor_crenshaw[0][0])? 
                                ((<script>{cor_crenshaw[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_crenshaw[1][0])? 
                                (((cor_crenshaw[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_crenshaw[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_crenshaw[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_crenshaw[2][0])? 
                                ((<script>{cor_crenshaw[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_crenshaw[3][0])? 
                                ((<script>{cor_crenshaw[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_crenshaw[4][0])? 
                                ((<script>{cor_crenshaw[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_crenshaw[5][0])? 
                                ((<script>{cor_crenshaw[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_crenshaw[6][0])? 
                                ((<script>{cor_crenshaw[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_crenshaw[7][0])? 
                                ((<script>{cor_crenshaw[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_crenshaw[8][0])? 
                                ((<script>{cor_crenshaw[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_crenshaw[9][0])? 
                                ((<script>{cor_crenshaw[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_crenshaw[10][0])? 
                                ((<script>{cor_crenshaw[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_crenshaw[11][0])? 
                                ((<script>{cor_crenshaw[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_crenshaw[12][0])? 
                                ((<script>{cor_crenshaw[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_crenshaw[13][0])? 
                                ((<script>{cor_crenshaw[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_crenshaw[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_crenshaw[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_crenshaw[0][0]}</script>),
                                    (<script>{temp2=cor_crenshaw[1][0]}</script>),
                                    (<script>{temp3=cor_crenshaw[2][0]}</script>),
                                    (<script>{temp4=cor_crenshaw[3][0]}</script>),
                                    (<script>{temp5=cor_crenshaw[4][0]}</script>),
                                    (<script>{temp6=cor_crenshaw[5][0]}</script>),
                                    (<script>{temp7=cor_crenshaw[6][0]}</script>),
                                    (<script>{temp8=cor_crenshaw[7][0]}</script>),
                                    (<script>{temp9=cor_crenshaw[8][0]}</script>),
                                    (<script>{temp10=cor_crenshaw[9][0]}</script>),
                                    (<script>{temp11=cor_crenshaw[10][0]}</script>),
                                    (<script>{temp12=cor_crenshaw[11][0]}</script>),
                                    (<script>{temp13=cor_crenshaw[12][0]}</script>),
                                    (<script>{temp14=cor_crenshaw[13][0]}</script>)))
                                        : null}

                            {/* checking answers for Frindle */}
                                {(t.Title_of_Book === "Frindle")? 
                                (((t.Receptive1 === cor_frindle[0][0])? 
                                    ((<script>{cor_frindle[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(1)}</script>),
                                    ((t.Receptive2 === cor_frindle[1][0])? 
                                    (((cor_frindle[1][1]==="target")? targetCount= targetCount+1: null),
                                        ((cor_frindle[1][1]==="easy")? easyCount= easyCount+1: null),
                                        ((cor_frindle[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                        : <script>{incorrectOnes.push(2)}</script>),
                                    ((t.Receptive3 === cor_frindle[2][0])? 
                                    ((<script>{cor_frindle[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(3)}</script>),
                                    ((t.Receptive4 === cor_frindle[3][0])? 
                                    ((<script>{cor_frindle[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(4)}</script>),
                                    ((t.Receptive5 === cor_frindle[4][0])? 
                                    ((<script>{cor_frindle[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(5)}</script>),
                                    ((t.Receptive6 === cor_frindle[5][0])? 
                                    ((<script>{cor_frindle[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(6)}</script>),
                                    ((t.Receptive7 === cor_frindle[6][0])? 
                                    ((<script>{cor_frindle[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(7)}</script>),
                                    ((t.Receptive8 === cor_frindle[7][0])? 
                                    ((<script>{cor_frindle[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(8)}</script>),
                                    ((t.Receptive9 === cor_frindle[8][0])? 
                                    ((<script>{cor_frindle[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(9)}</script>),
                                    ((t.Receptive10 === cor_frindle[9][0])? 
                                    ((<script>{cor_frindle[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(10)}</script>),
                                    ((t.Receptive11=== cor_frindle[10][0])? 
                                    ((<script>{cor_frindle[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(11)}</script>),
                                    ((t.Receptive12 === cor_frindle[11][0])? 
                                    ((<script>{cor_frindle[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(12)}</script>),
                                    ((t.Receptive13 === cor_frindle[12][0])? 
                                    ((<script>{cor_frindle[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(13)}</script>),
                                    ((t.Receptive14 === cor_frindle[13][0])? 
                                    ((<script>{cor_frindle[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_frindle[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_frindle[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(14)}</script>,
                                        (<script>{temp1=cor_frindle[0][0]}</script>),
                                        (<script>{temp2=cor_frindle[1][0]}</script>),
                                        (<script>{temp3=cor_frindle[2][0]}</script>),
                                        (<script>{temp4=cor_frindle[3][0]}</script>),
                                        (<script>{temp5=cor_frindle[4][0]}</script>),
                                        (<script>{temp6=cor_frindle[5][0]}</script>),
                                        (<script>{temp7=cor_frindle[6][0]}</script>),
                                        (<script>{temp8=cor_frindle[7][0]}</script>),
                                        (<script>{temp9=cor_frindle[8][0]}</script>),
                                        (<script>{temp10=cor_frindle[9][0]}</script>),
                                        (<script>{temp11=cor_frindle[10][0]}</script>),
                                        (<script>{temp12=cor_frindle[11][0]}</script>),
                                        (<script>{temp13=cor_frindle[12][0]}</script>),
                                        (<script>{temp14=cor_frindle[13][0]}</script>)))
                                            : null}

                            {/* checking answers for Memphis, Martin, and the Mountaintop : The Sanitation Strike of 1968 */}
                                {(t.Title_of_Book === "Memphis, Martin, and the Mountaintop : The Sanitation Strike of 1968")? 
                                (((t.Receptive1 === cor_memphis[0][0])? 
                                    ((<script>{cor_memphis[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(1)}</script>),
                                    ((t.Receptive2 === cor_memphis[1][0])? 
                                    (((cor_memphis[1][1]==="target")? targetCount= targetCount+1: null),
                                        ((cor_memphis[1][1]==="easy")? easyCount= easyCount+1: null),
                                        ((cor_memphis[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                        : <script>{incorrectOnes.push(2)}</script>),
                                    ((t.Receptive3 === cor_memphis[2][0])? 
                                    ((<script>{cor_memphis[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(3)}</script>),
                                    ((t.Receptive4 === cor_memphis[3][0])? 
                                    ((<script>{cor_memphis[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(4)}</script>),
                                    ((t.Receptive5 === cor_memphis[4][0])? 
                                    ((<script>{cor_memphis[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(5)}</script>),
                                    ((t.Receptive6 === cor_memphis[5][0])? 
                                    ((<script>{cor_memphis[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(6)}</script>),
                                    ((t.Receptive7 === cor_memphis[6][0])? 
                                    ((<script>{cor_memphis[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(7)}</script>),
                                    ((t.Receptive8 === cor_memphis[7][0])? 
                                    ((<script>{cor_memphis[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(8)}</script>),
                                    ((t.Receptive9 === cor_memphis[8][0])? 
                                    ((<script>{cor_memphis[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(9)}</script>),
                                    ((t.Receptive10 === cor_memphis[9][0])? 
                                    ((<script>{cor_memphis[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(10)}</script>),
                                    ((t.Receptive11=== cor_memphis[10][0])? 
                                    ((<script>{cor_memphis[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(11)}</script>),
                                    ((t.Receptive12 === cor_memphis[11][0])? 
                                    ((<script>{cor_memphis[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(12)}</script>),
                                    ((t.Receptive13 === cor_memphis[12][0])? 
                                    ((<script>{cor_memphis[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(13)}</script>),
                                    ((t.Receptive14 === cor_memphis[13][0])? 
                                    ((<script>{cor_memphis[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                        <script>{cor_memphis[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                        <script>{cor_memphis[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                        : <script>{incorrectOnes.push(14)}</script>,
                                        (<script>{temp1=cor_memphis[0][0]}</script>),
                                        (<script>{temp2=cor_memphis[1][0]}</script>),
                                        (<script>{temp3=cor_memphis[2][0]}</script>),
                                        (<script>{temp4=cor_memphis[3][0]}</script>),
                                        (<script>{temp5=cor_memphis[4][0]}</script>),
                                        (<script>{temp6=cor_memphis[5][0]}</script>),
                                        (<script>{temp7=cor_memphis[6][0]}</script>),
                                        (<script>{temp8=cor_memphis[7][0]}</script>),
                                        (<script>{temp9=cor_memphis[8][0]}</script>),
                                        (<script>{temp10=cor_memphis[9][0]}</script>),
                                        (<script>{temp11=cor_memphis[10][0]}</script>),
                                        (<script>{temp12=cor_memphis[11][0]}</script>),
                                        (<script>{temp13=cor_memphis[12][0]}</script>),
                                        (<script>{temp14=cor_memphis[13][0]}</script>)))
                                            : null}
                        {/* checking answers for Puppies Dogs and Blue Northers : Reflections on Being Raised by a Pack of Sled Dogs */}
                            {(t.Title_of_Book === "Puppies Dogs and Blue Northers : Reflections on Being Raised by a Pack of Sled Dogs")? 
                            (((t.Receptive1 === cor_pups[0][0])? 
                                ((<script>{cor_pups[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_pups[1][0])? 
                                (((cor_pups[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_pups[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_pups[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_pups[2][0])? 
                                ((<script>{cor_pups[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_pups[3][0])? 
                                ((<script>{cor_pups[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_pups[4][0])? 
                                ((<script>{cor_pups[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_pups[5][0])? 
                                ((<script>{cor_pups[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_pups[6][0])? 
                                ((<script>{cor_pups[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_pups[7][0])? 
                                ((<script>{cor_pups[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_pups[8][0])? 
                                ((<script>{cor_pups[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_pups[9][0])? 
                                ((<script>{cor_pups[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_pups[10][0])? 
                                ((<script>{cor_pups[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_pups[11][0])? 
                                ((<script>{cor_pups[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_pups[12][0])? 
                                ((<script>{cor_pups[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_pups[13][0])? 
                                ((<script>{cor_pups[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_pups[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_pups[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_pups[0][0]}</script>),
                                    (<script>{temp2=cor_pups[1][0]}</script>),
                                    (<script>{temp3=cor_pups[2][0]}</script>),
                                    (<script>{temp4=cor_pups[3][0]}</script>),
                                    (<script>{temp5=cor_pups[4][0]}</script>),
                                    (<script>{temp6=cor_pups[5][0]}</script>),
                                    (<script>{temp7=cor_pups[6][0]}</script>),
                                    (<script>{temp8=cor_pups[7][0]}</script>),
                                    (<script>{temp9=cor_pups[8][0]}</script>),
                                    (<script>{temp10=cor_pups[9][0]}</script>),
                                    (<script>{temp11=cor_pups[10][0]}</script>),
                                    (<script>{temp12=cor_pups[11][0]}</script>),
                                    (<script>{temp13=cor_pups[12][0]}</script>),
                                    (<script>{temp14=cor_pups[13][0]}</script>)))
                                        : null}


                        {/* checking answers for Schomburg: The Man Who Built A Library */}
                            {(t.Title_of_Book === "Schomburg: The Man Who Built A Library")? 
                            (((t.Receptive1 === cor_schom[0][0])? 
                                ((<script>{cor_schom[0][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[0][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[0][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(1)}</script>),
                                ((t.Receptive2 === cor_schom[1][0])? 
                                (((cor_schom[1][1]==="target")? targetCount= targetCount+1: null),
                                    ((cor_schom[1][1]==="easy")? easyCount= easyCount+1: null),
                                    ((cor_schom[1][1]==="non-book")? nonbookCount= nonbookCount+1: null))
                                    : <script>{incorrectOnes.push(2)}</script>),
                                ((t.Receptive3 === cor_schom[2][0])? 
                                ((<script>{cor_schom[2][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[2][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[2][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(3)}</script>),
                                ((t.Receptive4 === cor_schom[3][0])? 
                                ((<script>{cor_schom[3][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[3][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[3][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(4)}</script>),
                                ((t.Receptive5 === cor_schom[4][0])? 
                                ((<script>{cor_schom[4][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[4][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[4][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(5)}</script>),
                                ((t.Receptive6 === cor_schom[5][0])? 
                                ((<script>{cor_schom[5][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[5][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[5][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(6)}</script>),
                                ((t.Receptive7 === cor_schom[6][0])? 
                                ((<script>{cor_schom[6][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[6][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[6][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(7)}</script>),
                                ((t.Receptive8 === cor_schom[7][0])? 
                                ((<script>{cor_schom[7][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[7][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[7][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(8)}</script>),
                                ((t.Receptive9 === cor_schom[8][0])? 
                                ((<script>{cor_schom[8][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[8][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[8][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(9)}</script>),
                                ((t.Receptive10 === cor_schom[9][0])? 
                                ((<script>{cor_schom[9][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[9][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[9][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(10)}</script>),
                                ((t.Receptive11=== cor_schom[10][0])? 
                                ((<script>{cor_schom[10][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[10][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[10][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(11)}</script>),
                                ((t.Receptive12 === cor_schom[11][0])? 
                                ((<script>{cor_schom[11][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[11][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[11][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(12)}</script>),
                                ((t.Receptive13 === cor_schom[12][0])? 
                                ((<script>{cor_schom[12][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[12][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[12][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(13)}</script>),
                                ((t.Receptive14 === cor_schom[13][0])? 
                                ((<script>{cor_schom[13][1]==="target"? targetCount= targetCount+1: null}</script>,
                                    <script>{cor_schom[13][1]==="easy"? easyCount= easyCount+1: null}</script>,
                                    <script>{cor_schom[13][1]==="non-book"? nonbookCount= nonbookCount+1: null}</script>))
                                    : <script>{incorrectOnes.push(14)}</script>,
                                    (<script>{temp1=cor_schom[0][0]}</script>),
                                    (<script>{temp2=cor_schom[1][0]}</script>),
                                    (<script>{temp3=cor_schom[2][0]}</script>),
                                    (<script>{temp4=cor_schom[3][0]}</script>),
                                    (<script>{temp5=cor_schom[4][0]}</script>),
                                    (<script>{temp6=cor_schom[5][0]}</script>),
                                    (<script>{temp7=cor_schom[6][0]}</script>),
                                    (<script>{temp8=cor_schom[7][0]}</script>),
                                    (<script>{temp9=cor_schom[8][0]}</script>),
                                    (<script>{temp10=cor_schom[9][0]}</script>),
                                    (<script>{temp11=cor_schom[10][0]}</script>),
                                    (<script>{temp12=cor_schom[11][0]}</script>),
                                    (<script>{temp13=cor_schom[12][0]}</script>),
                                    (<script>{temp14=cor_schom[13][0]}</script>)))
                                        : null}
                                            
                        <strong>Child's Incorrect Answers: </strong>
                        <strong>{incorrectOnes.join(', ')}</strong>
                        <h3>Receptive Target Raw Score: {targetCount}</h3>
                        <h3>Receptive Easy Raw Score: {easyCount}</h3>
                        <h3>Receptive Non-book Raw Score: {nonbookCount}</h3>
                        <h3>Receptive All Raw Score: {targetCount+easyCount+nonbookCount}</h3>
                        
                        <script>{exportingData.push({aliID: t.ALI_ID, testDate: t.Date, testerInitials: t.Tester_Initials, bookTitle: t.Title_of_Book, 
    testVersion: t.Pretest_or_Postest, receptiveNotes: t.Receptive_Notes, rec1: t.Receptive1, rec2: t.Receptive2, rec3: t.Receptive3, rec4: t.Receptive4, 
    rec5: t.Receptive5, rec6: t.Receptive6, rec7: t.Receptive7, rec8: t.Receptive8, rec9: t.Receptive9, rec10: t.Receptive10, rec11: t.Receptive11, 
    rec12: t.Receptive12, rec13: t.Receptive13, rec14: t.Receptive14, targetRaw: targetCount, easyRaw: easyCount, nonbookRaw: nonbookCount, allRaw: targetCount+easyCount+nonbookCount, incorrectItems:incorrectOnes,
    recCor1: temp1, recCor2: temp2, recCor3: temp3, recCor4: temp4, 
    recCor5: temp5, recCor6: temp6, recCor7: temp7, recCor8: temp8, recCor9: temp9, recCor10: temp10, recCor11: temp11, recCor12: temp12, recCor13: temp13, recCor14: temp14,
})}</script>
<script>{targetCount = 0, easyCount = 0, nonbookCount=0, incorrectOnes=[], temp1 = '', temp2='', temp3='', temp4='', temp5='',
temp6='', temp7='', temp8='', temp9='', temp10='', temp11='', temp12='', temp13='', temp14=''}</script>
                    </li>
                ))}
            </ul>
            

        </div>
    )
}
