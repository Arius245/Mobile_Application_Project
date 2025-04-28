import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Film', value: 'Film' },
    { label: 'Album', value: 'Album' },
    { label: 'TV Show', value: 'TV Show' },
    { label: 'Book', value: 'Book' },
];

const DropdownButton = (props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'hsl(0, 100%, 97%)' }]}>
            Type:
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'hsl(0, 100%, 97%)' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select type' : '...'}
          searchPlaceholder="Search..."
          value={props.value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            props.onChange(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default DropdownButton;

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'hsl(227, 46%, 77%)',
      // padding: 16,
      padding: 10,
    },
    dropdown: {
      height: 50,
      borderColor: 'hsl(234, 41%, 30%)',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      // backgroundColor: 'hsl(227, 46%, 77%)',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });