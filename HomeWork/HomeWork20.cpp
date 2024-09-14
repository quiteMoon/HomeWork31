#include <iostream>
#include <vector>

using namespace std;

class Instrument {
protected:
    string name;
    int inventionYear;

public:
    Instrument(const string& name, int inventionYear)
        : name(name), inventionYear(inventionYear) {}

    virtual ~Instrument() = default;

    virtual void playSound() const = 0;  
    virtual void adjustVolume() const = 0; 
};

class StringInstrument : public Instrument {
    int numberOfStrings;

public:
    StringInstrument(const string& name, int inventionYear, int numberOfStrings)
        : Instrument(name, inventionYear), numberOfStrings(numberOfStrings) {}

    void playSound() const override {
        cout << name << " (String Instrument) is playing with " << numberOfStrings << " strings." << endl;
    }

    void adjustVolume() const override {
        cout << "Adjusting volume for string instrument: " << name << endl;
    }
};

class WindInstrument : public Instrument {
    string mouthpieceType;

public:
    WindInstrument(const string& name, int inventionYear, const string& mouthpieceType)
        : Instrument(name, inventionYear), mouthpieceType(mouthpieceType) {}

    void playSound() const override {
        cout << name << " (Wind Instrument) is playing through a " << mouthpieceType << " mouthpiece." << endl;
    }

    void adjustVolume() const override {
        cout << "Adjusting volume for wind instrument: " << name << endl;
    }
};

class PercussionInstrument : public Instrument {
    string drumType;

public:
    PercussionInstrument(const string& name, int inventionYear, const string& drumType)
        : Instrument(name, inventionYear), drumType(drumType) {}

    void playSound() const override {
        cout << name << " (Percussion Instrument) is playing with a " << drumType << " drum." << endl;
    }

    void adjustVolume() const override {
        cout << "Adjusting volume for percussion instrument: " << name << endl;
    }
};

int main() {
    vector<Instrument*> orchestra;

    orchestra.push_back(new StringInstrument("Guitar", 1500, 6));
    orchestra.push_back(new WindInstrument("Flute", 1847, "Lip hole"));
    orchestra.push_back(new PercussionInstrument("Drum", 1400, "Membrane"));

    for (Instrument* instrument : orchestra) {
        instrument->playSound();
        instrument->adjustVolume();
    }

    for (Instrument* instrument : orchestra) {
        delete instrument;
    }
}
