import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import workshopdata from '../../data/workshops.json';
import WorkshopCard from './m-workshopcard';

const workshops = workshopdata;

const categories = ['Workshop 2.5', 'In-House', 'Custom', 'Archived'];

const displayStrings = {
  'Workshop 2.5': 'Workshop 2.5',
  'In-House': 'In-House',
  Custom: 'Custom',
  Archived: 'Archived',
};

const mapToDisplayString = (category) => displayStrings[category] || category;

const FilterList = ({ workshops, setFilteredWorkshops }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const accordionRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        accordionRef.current
          .querySelector('.MuiButtonBase-root.Mui-expanded')
          .click();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [accordionRef]);

  const handleToggle = (value) => () => {
    const currentIndex = selectedCategories.indexOf(value);
    const newSelectedCategories = [...selectedCategories];

    if (currentIndex === -1) {
      newSelectedCategories.push(value);
    } else {
      newSelectedCategories.splice(currentIndex, 1);
    }

    setSelectedCategories(newSelectedCategories);
    filterWorkshops(newSelectedCategories);
  };

  const filterWorkshops = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setFilteredWorkshops(workshops);
    } else {
      const filteredWorkshops = workshops.filter((workshop) =>
        selectedCategories.includes(workshop.type)
      );
      setFilteredWorkshops(filteredWorkshops);
    }
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setFilteredWorkshops(workshops);
  };

  return (
    <Accordion ref={accordionRef}>
      <AccordionSummary
        sx={{
          '&.Mui-expanded': {
            minHeight: 0,
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0 0 0 ',
          },
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="subtitle1">Filter</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List sx={{ marginBottom: 2 }}>
          {categories.map((category) => {
            const displayString = mapToDisplayString(category);
            const labelId = `switch-list-label-${displayString}`;

            return (
              <ListItem
                key={category}
                dense
                button
                onClick={handleToggle(category)}
              >
                <Switch
                  edge="start"
                  checked={selectedCategories.indexOf(category) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
                <ListItemText id={labelId} primary={displayString} />
              </ListItem>
            );
          })}
        </List>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

const WorkshopList = () => {
  const [filteredWorkshops, setFilteredWorkshops] = useState(workshops);

  return (
    <div style={{ backgroundColor: '#c9cdd6' }}>
      <FilterList
        workshops={workshops}
        setFilteredWorkshops={setFilteredWorkshops}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {filteredWorkshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop.workshop}
            date={workshop.date}
            participants={workshop.participants}
            progress={workshop.progress}
            category={workshop.type}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopList;
