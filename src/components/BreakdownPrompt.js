import React from 'react';
import Button from 'react-bootstrap/Button';

export default function BreakdownPrompt({ pcCase, cpuCooler, psu, gpu  }) {
  return (
    <>
        <div id="breakdown-prompt-container">
          <p>Are you ready to view the breakdown?</p>
          <Button variant="dark">Yes</Button>{' '}
          <Button variant="dark">No (return)</Button>{' '}
        </div>
      </>
  )
}