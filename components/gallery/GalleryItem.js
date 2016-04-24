import React, {
  PropTypes,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

const GalleryItem = ({ name, image, width, handleItemPress }) => (
  <Image source={image}
      resizeMode='cover'
      style={[
        styles.thumb,
        {
          width: width,
          height: width,
        },
      ]}>
    <TouchableOpacity style={styles.overlay}
        onPress={handleItemPress}>
      <Text style={styles.label}>{name}</Text>
    </TouchableOpacity>
  </Image>
)

const styles = StyleSheet.create({
  thumb: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  label: {
    color: '#FFF',
    fontSize: 16,
  },
})

GalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleItemPress: PropTypes.func.isRequired,
}

export default GalleryItem